export default {
  getCustomers({search = ''}){
    return $.get('/api/customers/', {search});
  },

  createCustomer(c){
    return $.ajax({
      type: 'POST',
      url: '/api/customers/',
      data: JSON.stringify(c),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    });
  },

  getCustomer(id){
    return $.get('/api/customers/' + id);
  },

  updateCustomer(c){
    return $.ajax({
      type: 'POST',
      url: '/api/customers/' + c.id,
      data: JSON.stringify(c),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    });
  },

  deleteCustomer(c){
    return $.ajax({
      type: 'DELETE',
      url: '/api/customers/' + c.id
    });
  }
};
