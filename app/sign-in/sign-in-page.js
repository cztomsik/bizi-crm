import angular from 'angular';

angular.module('app').component('signInPage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <h3>Sign in</h3>
        </b-container>
      </b-jumbotron>

      <b-container>
        <b-alert ng-show=" $ctrl.error ">
          {{ $ctrl.error }}
        </b-alert>

        <b-form-group>
          <label>Username</label>
          <b-input ng-model=" $ctrl.username " />
        </b-form-group>

        <b-form-group>
          <label>Password</label>
          <input type="password" class="form-control" ng-model=" $ctrl.password ">
        </b-form-group>

        <b-button text="Sign in" ng-click=" $ctrl.signIn() "></b-button>
      </b-container>
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
