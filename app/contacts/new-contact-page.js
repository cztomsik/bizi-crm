import angular from 'angular';
import contactsService from './contacts-service';
import './_contact-form';

angular.module('app').component('newContactPage', {
  template: `
    <b-page>
      <h3>New contact</h3>

      <!-- angular component -->
      <contact-form contact=" $ctrl.contact "></contact-form>

      <b-button text="Create" ng-click=" $ctrl.create() "></b-button>
    </b-page>
  `,

  controller: class NewContactPageController{
    constructor($rootRouter){
      this.$rootRouter = $rootRouter;

      this.contact = {
        name: null
      };
    }

    create(){
      return contactsService.createContact(this.contact).then((c) => {
        return this.$rootRouter.navigate(['ShowContactPage', {id: c.id}]);
      });
    }
  }
});
