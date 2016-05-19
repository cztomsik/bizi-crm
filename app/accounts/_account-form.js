import angular from 'angular';

angular.module('app').component('accountForm', {
  bindings: {
    account: '<'
  },

  template: `
    <form>
      <b-grid>
        <label>Name</label>
        <b-text-input ng-model=" $ctrl.account.name " />

        <label>Name</label>
        <b-text-input ng-model=" $ctrl.account.name " />
      </b-grid>
    </form>
  `
});
