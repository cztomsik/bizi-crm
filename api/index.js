'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const contactsService = require('./contacts-service');

const api = express();
module.exports = api;

const parseJson = bodyParser.json();

// transaction boundary
// api.use(...)


// TODO: validate POSTs
api.get('/contacts', end(contactsService.getContacts.bind(contactsService)));
api.post('/contacts', parseJson, end(contactsService.createContact.bind(contactsService)));
api.get('/contacts/:id', end(contactsService.getContact.bind(contactsService)));
api.post('/contacts/:id', parseJson, end(contactsService.updateContact.bind(contactsService)));
api.delete('/contacts/:id', end(contactsService.deleteContact.bind(contactsService)));


// req.body will be always filled if parseJson is used globally
function end(handler){
  return function(req, res, next){
    return Promise.resolve(handler(req.body || Object.assign({}, req.params, req.query))).then(res.send.bind(res), next);
  };
}
