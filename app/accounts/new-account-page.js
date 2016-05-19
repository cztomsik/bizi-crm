import angular from 'angular';
import accountsService from './accounts-service';
import './_account-form';

angular.module('app').component('newAccountPage', {
  template: `
    <b-page>
      <h3>New account</h3>

      <!-- angular component -->
      <account-form account=" $ctrl.account "></account-form>

      <b-button text="Create" ng-click=" $ctrl.create() "></b-button>
    </b-page>
  `,

  controller: class NewAccountPageController{
    constructor($rootRouter){
      this.$rootRouter = $rootRouter;

      this.account = {
        name: null
      };
    }

    create(){
      return accountsService.createAccount(this.account).then((a) => {
        return this.$rootRouter.navigate(['ShowAccountPage', {id: a.id}]);
      });
    }
  }
});
