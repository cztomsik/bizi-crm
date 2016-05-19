import $http from '../$http';

const contactsService = {
  getContacts(){
    return $http.get('/api/contacts/').then(res => res.data);
  },

  createContact(a){
    return $http.post('/api/contacts/', a).then(res => res.data);
  },

  getContact(id){
    return $http.get('/api/contacts/' + id).then(res => res.data);
  },

  updateContact(a){
    return $http.post('/api/contacts/' + a.id, a).then(res => res.data);
  },

  deleteContact(id){
    return $http.delete('/api/contacts/' + id).then(res => res.data);
  }
};

export default contactsService;
