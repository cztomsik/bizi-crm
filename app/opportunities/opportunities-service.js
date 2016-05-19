import $http from '../$http';

const opportunitiesService = {
  getOpportunities(){
    return $http.get('/api/opportunities/').then(res => res.data);
  },

  createOpportunity(a){
    return $http.post('/api/opportunities/', a).then(res => res.data);
  },

  getOpportunity(id){
    return $http.get('/api/opportunities/' + id).then(res => res.data);
  },

  updateOpportunity(a){
    return $http.post('/api/opportunities/' + a.id, a).then(res => res.data);
  },

  deleteOpportunity(id){
    return $http.delete('/api/opportunities/' + id).then(res => res.data);
  }
};

export default opportunitiesService;
