module.exports = {
  routes: {},
  listener: null,

  goTo: function(path, params){
    return Promise.resolve(this.listener({
      page: this.routes[path],
      params: params
    }));
  }
};
