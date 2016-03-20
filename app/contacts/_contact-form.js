import angular from 'angular';

angular.module('app').component('contactForm', {
  bindings: {
    contact: '<'
  },

  template: `
    <div>
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" ng-model=" $ctrl.contact.name ">
      </div>

      <div class="form-group">
        <label>Company</label>
        <input class="form-control" ng-model=" $ctrl.contact.company ">
      </div>

      <div class="form-group">
        <label>Job Title</label>
        <input class="form-control" ng-model=" $ctrl.contact.jobTitle ">
      </div>

      <div class="form-group">
        <label>Phone</label>
        <input class="form-control" ng-model=" $ctrl.contact.phone ">
      </div>

      <div class="form-group">
        <label>Email</label>
        <input class="form-control" ng-model=" $ctrl.contact.email ">
      </div>

      <div class="form-group">
        <label>Address</label>
        <textarea class="form-control" ng-model=" $ctrl.contact.address "></textarea>
      </div>

      <div class="form-group">
        <label>Note</label>
        <textarea class="form-control" ng-model=" $ctrl.contact.note "></textarea>
      </div>
    </div>
  `
});
