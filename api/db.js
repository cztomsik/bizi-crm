'use strict';

const _ = require('lodash');
const co = require('co');
const arbokDb = require('arbok-db');
const contacts = require('./_contacts');

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
  },

  delete(table, id){
    return arbokDb.execute('DELETE FROM ${table} WHERE id = ?', id);
  }
};

co(function*(){
  yield db.execute(`
    CREATE TABLE accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  yield db.execute(`
    CREATE TABLE opportunities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      account_id INTEGER,
      name TEXT NOT NULL,
      FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
    );
  `);

  yield db.execute(`
    CREATE TABLE contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      account_id INTEGER,
      name TEXT NOT NULL,
      FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
    );
  `);

  for (let a of ['ACME', 'Doe Inc']){
    yield db.execute('INSERT INTO accounts (name) VALUES (?)', a);
  }

  let i = 0;
  for (let a of ['ACME Opp', 'Doe Opp']){
    yield db.execute('INSERT INTO opportunities (name, account_id) VALUES (?, ?)', a, ++i);
  }

  let ii = 0;
  for (let a of ['ACME Opp2', 'Doe Opp2']){
    yield db.execute('INSERT INTO opportunities (name, account_id) VALUES (?, ?)', a, ++ii);
  }

  for (let c of contacts.slice(0, 3)){
    yield db.execute('INSERT INTO contacts (name) VALUES (?)', c.name);
  }

  log(yield db.all('accounts'));
  log(yield db.all('opportunities'));
  log(yield db.all('contacts'));
}).catch(log);

function log(res){
  console.log(res);
}

module.exports = db;
