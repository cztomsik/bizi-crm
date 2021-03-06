import angular from 'angular';

angular.module('app').component('signInPage', {
  template: `
    <b-page>
      <h3>Sign in</h3>

      <div class="alert alert-danger" ng-show=" $ctrl.error ">
        {{ $ctrl.error }}
      </div>

      <b-grid>
        <label>Username</label>
        <b-text-input ng-model=" $ctrl.username " />

        <label>Password</label>
        <input type="password" class="form-control" ng-model=" $ctrl.password ">

        <span ng-show=" $ctrl.rememberMe ">If this was for real you would be remembered</span>
        <b-checkbox text="Remember me" ng-model=" $ctrl.rememberMe " />
      </b-grid>

      <b-button text="Sign in" ng-click=" $ctrl.signIn() "></b-button>
    </b-page>
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
