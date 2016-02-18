var express = require('express');
var bodyParser = require('body-parser');
var contactService = require('./contact-service');

var api = express();
module.exports = api;

var parseJson = bodyParser.json();

// transaction boundary
// api.use(...)


// TODO: validate POSTs
api.get('/contacts', end(contactService.getContacts.bind(contactService)));
api.post('/contacts', parseJson, end(contactService.createContact.bind(contactService)));
api.get('/contacts/:id', end(contactService.getContact.bind(contactService)));
api.post('/contacts/:id', parseJson, end(contactService.updateContact.bind(contactService)));
api.delete('/contacts/:id', end(contactService.deleteContact.bind(contactService)));


// req.body will be always filled if parseJson is used globally
function end(handler){
  return function(req, res){
    return Promise.resolve(handler(req.body || Object.assign({}, req.params, req.query))).then(res.send.bind(res));
  };
}
