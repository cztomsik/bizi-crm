'use strict';

const _ = require('lodash');
const sqlite3 = require('sqlite3');
const sqliteDb = new sqlite3.Database(':memory:');

const db = {
  query(sql, params){
    console.info(sql, params);

    return new Promise((resolve, reject) => {
      const meth = sql.match(/insert|replace/i) ?'run' :'all';

      sqliteDb[meth](sql, params || {}, (err, rows) => {
        if (err){
          console.error(err);
          reject(err);
        }

        if (rows && rows.map){
          rows = rows.map((r) => {
            return camelCaseObject(r);
          });
        }

        resolve(rows);
      });
    });
  },

  find(table, params){
    return this.query('SELECT * FROM ' + table + ' WHERE ' + where(params) + ' LIMIT 1', values(params)).then(rows => rows[0]);
  },

  insert(table, data){
    return this.query('INSERT INTO ' + table + ' (' + columns(data) + ') VALUES (' + placeholders(data) + ')', values(data));
  },

  update(table, params, data){
    return this.query('UPDATE ' + table + ' (' + columns(data) + ') ' + ' WHERE ' + where(params) + ' VALUES (' + placeholders(data) + ')', values(data));
  },

  delete(table, params){
    return this.query('DELETE FROM ' + table + ' WHERE ' + where(params), values(params));
  },

  getContacts(){
    return this.query('SELECT * FROM contacts');
  }
};

sqlite3.verbose();

sqliteDb.serialize(() => {
  sqliteDb.run(`
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
  `);

  // TODO: postinstall?
  const contacts = require('./_contacts');

  contacts.slice(0, 3).forEach(c => db.insert('contacts', c).catch(e => console.error(e)));

  db.query('SELECT * FROM contacts').then(rows => console.log(rows));
});

module.exports = db;


function placeholders(obj){
  return Object.keys(obj).map(k => '?').join(', ');
}

function columnNames(obj){
  return Object.keys(obj).map(_.snakeCase);
}

function columns(obj){
  return columnNames(obj).join(', ');
}

function values(obj){
  return Object.keys(obj).map(k => obj[k]);
}

function where(params){
  return Object.keys(params).map(k => k + ' = ?').join(', ');
}

// `SELECT col_name AS colName` is not enough
// - postgres always returns lowercase column names
function camelCaseObject(obj){
  const res = {};

  for (let k in obj){
    res[_.camelCase(k)] = obj[k];
  }

  return res;
}
