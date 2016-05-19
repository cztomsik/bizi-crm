'use strict';

const db = require('./db');

const accountsService = {
  getAccounts: function(){
    return db.all('accounts');
  },

  getAccount: function(params){
    return db.find('accounts', params.id);
  },

  createAccount: function(){
    throw new Error('TODO');
  },

  updateAccount: function(){
    throw new Error('TODO');
  },

  deleteAccount: function(a){
    return db.delete('accounts', a.id);
  }
};

module.exports = accountsService;
