var _ = require('lodash');
var contacts = require('./_contacts');

module.exports = {
  getContacts: function(query){
    if ( ! query.search){
      return contacts;
    }

    return _.filter(contacts, function(c){
      if (_.includes((c.name || '').toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      if (_.includes((c.jobTitle || '').toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      if (_.includes((c.company || '').toLowerCase(), query.search.toLowerCase())){
        return true;
      }

      return false;
    });
  },

  getContact: function(params){
    return _.find(contacts, {id: +params.id});
  },

  createContact: function(data){
    var c = _.assign({id: contacts.length + 1}, data);

    contacts.push(c);
    return c;
  },

  updateContact: function(data){
    var c = this.getContact({id: data.id});

    _.assign(c, data)
    return c;
  },

  deleteContact: function(params){
    contacts = _.without(contacts, this.getContact(params));
  }
};
