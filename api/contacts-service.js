'use strict';

const db = require('./db');

const contactsService = {
  getContacts: function(){
    return db.all('contacts');
    /*if ( ! query.search){
      'SELECT name FROM contacts'
    }

    'SELECT name FROM contacts WHERE name LIKE ? OR jobTitle LIKE ? or company LIKE ?', query.search, query.search, query.search*/
  },

  getContact: function(params){
    return db.find('contacts', params.id);
  },

  createContact: function(){
    throw new Error('TODO');
  },

  updateContact: function(){
    throw new Error('TODO');
  },

  deleteContact: function(c){
    return db.delete('contacts', c.id);
  }
};

module.exports = contactsService;
