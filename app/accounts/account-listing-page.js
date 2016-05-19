import angular from 'angular';
import accountsService from './accounts-service';

angular.module('app').component('accountListingPage', {
  template: `
    <b-page>
      <h2>Accounts</h2>
      <a class="btn btn-default" ng-link=" ['NewAccountPage'] ">New account</a>

      <b-data-table
        $columns=" [
          {header: 'Name', key: 'name'}
        ] "

        $items="$ctrl.accounts"
      />
    </b-page>
  `,

  controller: class AccountListingPageController{
    constructor(){
      this.accounts = null;
    }

    $routerOnActivate(){
      accountsService.getAccounts().then(as => this.accounts = as);
    }
  }
});
