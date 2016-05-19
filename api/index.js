'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const accountsService = require('./accounts-service');
const opportunitiesService = require('./opportunities-service');
const contactsService = require('./contacts-service');

const api = express();
module.exports = api;

const parseJson = bodyParser.json();

// transaction boundary
// api.use(...)


// TODO: validate POSTs
api.get('/accounts', end(accountsService.getAccounts.bind(accountsService)));
api.post('/accounts', parseJson, end(accountsService.createAccount.bind(accountsService)));
api.get('/accounts/:id', end(accountsService.getAccount.bind(accountsService)));
api.post('/accounts/:id', parseJson, end(accountsService.updateAccount.bind(accountsService)));
api.delete('/accounts/:id', end(accountsService.deleteAccount.bind(accountsService)));

api.get('/opportunities', end(opportunitiesService.getOpportunities.bind(opportunitiesService)));
api.post('/opportunities', parseJson, end(opportunitiesService.createOpportunity.bind(opportunitiesService)));
api.get('/opportunities/:id', end(opportunitiesService.getOpportunity.bind(opportunitiesService)));
api.post('/opportunities/:id', parseJson, end(opportunitiesService.updateOpportunity.bind(opportunitiesService)));
api.delete('/opportunities/:id', end(opportunitiesService.deleteOpportunity.bind(opportunitiesService)));

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
