var express = require('express');
var bodyParser = require('body-parser');
var customersService = require('./customers-service');

var api = express();
module.exports = api;

var parseJson = bodyParser.json();

// transaction boundary
// api.use(...)


// TODO: validate POSTs
api.get('/customers', end(customersService.getCustomers.bind(customersService)));
api.post('/customers', parseJson, end(customersService.createCustomer.bind(customersService)));
api.get('/customers/:id', end(customersService.getCustomer.bind(customersService)));
api.post('/customers/:id', parseJson, end(customersService.updateCustomer.bind(customersService)));
api.delete('/customers/:id', end(customersService.deleteCustomer.bind(customersService)));


// req.body will be always filled if parseJson is used globally
function end(handler){
  return function(req, res){
    return Promise.resolve(handler(req.body || Object.assign({}, req.params, req.query))).then(res.send.bind(res));
  };
}
