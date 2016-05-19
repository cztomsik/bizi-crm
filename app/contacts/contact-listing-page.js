import angular from 'angular';
import contactsService from './contacts-service';

angular.module('app').component('contactListingPage', {
  template: `
    <b-page>
      <h2>Contacts</h2>
      <a class="btn btn-default" ng-link=" ['NewContactPage'] ">New contact</a>

      <b-data-table
        $columns=" [
          {header: 'Name', key: 'name'}
        ] "

        $items="$ctrl.contacts"
      />
    </b-page>
  `,

  controller: class ContactListingPageController{
    constructor(){
      this.contacts = null;
    }

    $routerOnActivate(){
      contactsService.getContacts().then(cs => this.contacts = cs);
    }
  }
});
