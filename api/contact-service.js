'use strict';

const _ = require('lodash');
const db = require('./db');


const contacts = db.table('contacts');


module.exports = {
  getContacts: function(query){
    return contacts.all().then((contacts) => {
      if ( ! query.search){
        return contacts;
      }

      return _.filter(contacts, function(c){
        if (_.includes((c.name || '').toLowerCase(), query.search.toLowerCase())){
          return true;
        }

        if (_.includes((c.jobTitle || '').toLowerCase(), query.search.toLowerCase())){
          return true;
        }

        if (_.includes((c.company || '').toLowerCase(), query.search.toLowerCase())){
          return true;
        }

        return false;
      });
    });
  },

  getContact: function(params){
    return contacts.find({id: + params.id})
  },

  createContact: function(data){
    return contacts.create(data);
  },

  updateContact: function(data){
    contacts.update(data);
    return this.getContact({id: data.id});
  },

  deleteContact: function(params){
    return db.delete('contacts', params);
  }
};


db.query(`
  CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    job_title TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL,
    note TEXT NOT NULL
  );
`).then(() => {
  // TODO: postinstall?
  const contacts = require('./_contacts');

  contacts.slice(0, 3).forEach(c => db.table('contacts').create(c).catch(e => console.error(e)));


  function log(res){
    console.log(res);
  }
});
