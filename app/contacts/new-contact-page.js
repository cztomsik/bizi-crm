import angular from 'angular';
import './_contact-form';

angular.module('app').component('newContactPage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <h3>New contact</h3>
        </b-container>
      </b-jumbotron>

      <b-container>
        <contact-form contact=" $ctrl.contact "></contact-form>

        <b-button text="Create" ng-click=" $ctrl.create() "></b-button>
      </b-container>
    </b-page>
  `,

  controller: function(contactService, $rootRouter){
    this.contact = {
      name: null,
      company: null,
      jobTitle: null,
      phone: null,
      email: null,
      address: null,
      note: null
    };

    this.create = function(){
      return contactService.createContact(this.contact).then((c) => {
        return $rootRouter.navigate(['ShowContactPage', {id: c.id}]);
      });
    };
  }
});
