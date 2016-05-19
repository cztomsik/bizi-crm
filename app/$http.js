import angular from 'angular';

let $http = null;

function httpDelegate(){
  return $http.apply($http, arguments).then(res => res.data);
}

angular.module('app').run(($injector) => {
  $http = $injector.get('$http');
  Object.assign(httpDelegate, $http);
});

export default httpDelegate;
