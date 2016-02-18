export default {
  getContacts({search = ''}){
    return $.get('/api/contacts/', {search});
  },

  createContact(c){
    return $.ajax({
      type: 'POST',
      url: '/api/contacts/',
      data: JSON.stringify(c),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    });
  },

  getContact(id){
    return $.get('/api/contacts/' + id);
  },

  updateContact(c){
    return $.ajax({
      type: 'POST',
      url: '/api/contacts/' + c.id,
      data: JSON.stringify(c),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    });
  },

  deleteContact(c){
    return $.ajax({
      type: 'DELETE',
      url: '/api/contacts/' + c.id
    });
  }
};
