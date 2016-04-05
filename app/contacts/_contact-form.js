import angular from 'angular';

angular.module('app').component('contactForm', {
  bindings: {
    contact: '<'
  },

  template: `
    <b-form>
      <b-form-group>
        <label>Name</label>
        <b-input ng-model=" $ctrl.contact.name " />
      </b-form-group>

      <b-form-group>
        <label>Company</label>
        <b-input ng-model=" $ctrl.contact.company " />
      </b-form-group>

      <b-form-group>
        <label>Job Title</label>
        <b-input ng-model=" $ctrl.contact.jobTitle " />
      </b-form-group>

      <b-form-group>
        <label>Phone</label>
        <b-input ng-model=" $ctrl.contact.phone " />
      </b-form-group>

      <b-form-group>
        <label>Email</label>
        <b-input ng-model=" $ctrl.contact.email " />
      </b-form-group>

      <b-form-group>
        <label>Address</label>
        <b-textarea ng-model=" $ctrl.contact.address "></b-textarea>
      </b-form-group>

      <b-form-group>
        <label>Note</label>
        <b-textarea ng-model=" $ctrl.contact.note "></b-textarea>
      </b-form-group>
    </b-form>
  `
});
