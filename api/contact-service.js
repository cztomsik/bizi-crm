'use strict';

const db = require('./db');


module.exports = {
  getContacts: function(query){
    return db.getContacts();
    /*if ( ! query.search){
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
    });*/
  },

  getContact: function(params){
    return db.find('contacts', {id: +params.id});
  },

  createContact: function(data){
    return db.create('posts', data);
  },

  updateContact: function(data){
    return db.update('contacts', this.getContact({id: data.id}), data);
  },

  deleteContact: function(params){
    return db.delete('contacts', params);
  }
};
