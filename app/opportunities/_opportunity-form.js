import angular from 'angular';

angular.module('app').component('opportunityForm', {
  bindings: {
    opportunity: '<'
  },

  template: `
    <form>
      <b-grid>
        <label>Name</label>
        <b-text-input ng-model=" $ctrl.opportunity.name " />

        <label>Name</label>
        <b-text-input ng-model=" $ctrl.opportunity.name " />
      </b-grid>
    </form>
  `
});
