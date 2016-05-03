import angular from 'angular';

angular.module('app').component('contactForm', {
  bindings: {
    contact: '<'
  },

  template: `
    <form>
      <div class="form-group">
        <label>Name</label>
        <b-text-input ng-model=" $ctrl.contact.name " />
      </div>

      <div class="form-group">
        <label>Company</label>
        <b-text-input ng-model=" $ctrl.contact.company " />
      </div>

      <div class="form-group">
        <label>Job Title</label>
        <b-text-input ng-model=" $ctrl.contact.jobTitle " />
      </div>

      <div class="form-group">
        <label>Phone</label>
        <b-text-input ng-model=" $ctrl.contact.phone " />
      </div>

      <div class="form-group">
        <label>Email</label>
        <b-text-input ng-model=" $ctrl.contact.email " />
      </div>

      <div class="form-group">
        <label>Address</label>
        <b-textarea ng-model=" $ctrl.contact.address "></b-textarea>
      </div>

      <div class="form-group">
        <label>Note</label>
        <b-textarea ng-model=" $ctrl.contact.note "></b-textarea>
      </div>
    </form>
  `
});
