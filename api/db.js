'use strict';

const _ = require('lodash');


// SQLite3
const sqlite3 = require('sqlite3');
const sqliteDb = new sqlite3.Database(':memory:');
sqlite3.verbose();




// TODO: consider views
// it might be reasonable to force views for "OR" queries
const db = {
  table(name){
    return new Table(name);
  },

  query(sql, params){
    console.log(arguments);
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

  delete(table, params){
    return this.query('DELETE FROM ' + table + ' WHERE ' + where(params), values(params));
  }
};

class Table{
  constructor(name){
    this.name = name;
  }

  save(data){
    return (data.id) ?this.update(data) :this.create(data);
  }

  create(data){
    return db.query(`INSERT INTO ${this.name} (${columns(data)}) VALUES (${placeholders(data)})`, values(data));
  }

  update(data){
    return db.query(`UPDATE ${this.name} SET ${set(data)} WHERE ${where(params)}`, values(data).concat(values(params)));
  }

  find(predicate){
    return db.query(`SELECT * from ${this.name} WHERE id = ?`, predicate.id).then(_.first);
  }

  all(){
    return db.query(`SELECT * from ${this.name}`);
  }

  // meant for chaining
  none(){
    return Promise.resolve([]);
  }
}

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

function set(data){
  return Object.keys(data).map(k => [_.snakeCase(k), '?'].join(' = ')).join(', ');
}

// `SELECT col_name AS colName` is not enough
// - postgres always returns lowercase column names

function camelCaseObject(obj){
  return _.mapKeys(obj, _.rearg(_.camelCase, 1, 0));
}

function quote(str){
  return '\'' + str.replace(/'/g, '\'\'') + '\'';
}
