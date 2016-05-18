'use strict';

const _ = require('lodash');
const co = require('co');
const arbokDb = require('arbok-db');

const db = {
  execute(){
    return arbokDb.execute.apply(arbokDb, arguments);
  },

  all(table){
    return co(function*(){
      const res = yield arbokDb.execute(`SELECT * FROM ${table}`);
      const recs = res.rows.map(r => _.zipObject(res.columns, r));

      return recs;
    });
  },

  find(table, id){
    return co(function*(){
      const res = yield arbokDb.execute(`SELECT * FROM ${table} WHERE id = ?`, id);
      const rec = _.zipObject(res.columns, res.rows[0]);

      return rec;
    });
  }
};

module.exports = db;
