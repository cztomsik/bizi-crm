import angular from 'angular';

angular.module('app').component('contactForm', {
  bindings: {
    contact: '<'
  },

  template: `
    <form>
      <b-grid>
        <label>Name</label>
        <b-text-input ng-model=" $ctrl.contact.name " />

        <label>Name</label>
        <b-text-input ng-model=" $ctrl.contact.name " />
      </b-grid>
    </form>
  `
});
