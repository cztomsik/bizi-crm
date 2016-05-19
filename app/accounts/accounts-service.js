import $http from '../$http';

const accountsService = {
  getAccounts(){
    return $http.get('/api/accounts/').then(res => res.data);
  },

  createAccount(a){
    return $http.post('/api/accounts/', a).then(res => res.data);
  },

  getAccount(id){
    return $http.get('/api/accounts/' + id).then(res => res.data);
  },

  updateAccount(a){
    return $http.post('/api/accounts/' + a.id, a).then(res => res.data);
  },

  deleteAccount(id){
    return $http.delete('/api/accounts/' + id).then(res => res.data);
  }
};

export default accountsService;
