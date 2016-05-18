'use strict';

const _ = require('lodash');
const db = require('./db');

const contactsService = {
  getContacts: function(query){
    return db.all('contacts');
    /*if ( ! query.search){
      'SELECT name FROM contacts'
    }

    'SELECT name FROM contacts WHERE name LIKE ? OR jobTitle LIKE ? or company LIKE ?', query.search, query.search, query.search*/
  },

  getContact: function(params){
    return db.find('contacts', params.id);
  },

  createContact: function(data){
    throw new Error('TODO');
  },

  updateContact: function(c){
    throw new Error('TODO');
  },

  deleteContact: function(c){
    throw new Error('TODO');
  }
};

db.execute(`
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

  return Promise.all(contacts.slice(0, 3).map(c => {
    return db.execute('INSERT INTO contacts (id, name, company, job_title, phone, email, address, note) VALUES (...?)', _.values(c));
  }));
}).catch(log);

function log(res){
  console.log(res);
}


module.exports = contactsService;
