'use strict';

const co = require('co');
const db = require('./db');

const opportunitiesService = {
  getOpportunities: function(){
    return co(function*(){
      const ops = yield db.all('opportunities');

      return Promise.all(ops.map(o => op(o)));
    });
  },

  getOpportunity: function(params){
    return db.find('opportunities', params.id).then(o => op(o));
  },

  createOpportunity: function(){
    throw new Error('TODO');
  },

  updateOpportunity: function(){
    throw new Error('TODO');
  },

  deleteOpportunity: function(a){
    return db.delete('opportunities', a.id);
  }
};

function op(o){
  return co(function*(){
    o.account = yield db.find('accounts', o.account_id);

    return o;
  });
}

module.exports = opportunitiesService;
