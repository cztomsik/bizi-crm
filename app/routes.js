var CustomersIndex = require('./customers/customers-index');
var CustomersNew = require('./customers/customers-new');
var CustomersShow = require('./customers/customers-show');
var CustomersEdit = require('./customers/customers-edit');

module.exports = {
  'customers-index': CustomersIndex,
  'customers-new': CustomersNew,
  'customers-show': CustomersShow,
  'customers-edit': CustomersEdit
};
