import angular from 'angular';
import './_contact-form';

angular.module('app').component('newContactPage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid">
          <h3>New contact</h3>
        </div>
      </div>

      <div class="container-fluid">
        <contact-form contact=" $ctrl.contact "></contact-form>

        <button class="btn btn-primary" ng-click=" $ctrl.create() ">Create</button>
      </div>
    </div>
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
