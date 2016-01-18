var _ = require('lodash');
var customers = require('./_customers');

module.exports = {
  getCustomers: function(query){
    if ( ! query.search){
      return customers;
    }

    return _.filter(customers, function(c){
      if (_.includes(c.name.toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      if (_.includes(c.jobTitle.toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      if (_.includes(c.company.toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      return false;
    });
  },

  getCustomer: function(params){
    return _.find(customers, {id: +params.id});
  },

  createCustomer: function(data){
    var c = _.assign({id: customers.length + 1}, data);

    customers.push(c);
    return c;
  },

  updateCustomer: function(data){
    var c = this.getCustomer({id: data.id});

    _.assign(c, data)
    return c;
  },

  deleteCustomer: function(params){
    customers = _.without(customers, this.getCustomer(params));
  }
};
