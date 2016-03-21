import angular from 'angular';

angular.module('app').component('signInPage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid">
          <h3>Sign in</h3>
        </div>
      </div>

      <div class="container-fluid">
        <div class="alert alert-danger" ng-show=" $ctrl.error ">
          {{ $ctrl.error }}
        </div>

        <div class="form-group">
          <label>Username</label>
          <input class="form-control" ng-model=" $ctrl.username ">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" ng-model=" $ctrl.password ">
        </div>

        <button class="btn btn-default" ng-click=" $ctrl.signIn() ">Sign in</button>
      </div>
    </div>
  `,

  controller: function($rootRouter){
    this.error = null;

    this.username = 'admin';
    this.password = 'admin';


    this.signIn = function(){
      if ((this.username === 'admin') && (this.password === 'admin')){
        return $rootRouter.navigate(['ContactListingPage']);
      }

      this.error = 'Try admin/admin';
    };
  }
});
