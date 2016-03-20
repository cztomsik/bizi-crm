import angular from 'angular';

const getData = (res => res.data);

angular.module('app').factory('contactService', ($http) => {
  return {
    getContacts({search = ''}){
      return $http.get('/api/contacts/', {params: {search}}).then(getData);
    },

    createContact(c){
      return $http.post('/api/contacts/', c).then(getData);
    },

    getContact(id){
      return $http.get('/api/contacts/' + id).then(getData);
    },

    updateContact(c){
      return $http.post('/api/contacts/' + c.id, c).then(getData);
    },

    deleteContact(id){
      return $http.delete('/api/contacts/' + id).then(getData);
    }
  };
});
