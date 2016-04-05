import angular from 'angular';
import './_contact-form';

angular.module('app').component('editContactPage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <h3>
            Edit contact<br>
            <small>{{ $ctrl.contact.name }}</small>
          </h3>
        </b-container>
      </b-jumbotron>

      <b-container>
        <contact-form contact=" $ctrl.contact "></contact-form>

        <b-button text="Update" ng-click=" $ctrl.update() "></b-button>
      </b-container>
    </b-page>
  `,

  controller: function(contactService, $rootRouter){
    this.contact = null;

    this.$routerOnActivate = function(next){
      contactService.getContact(next.params.id).then(c => this.contact = c);
    };

    this.update = function(){
      return contactService.updateContact(this.contact).then((c) => {
        return $rootRouter.navigate(['ShowContactPage', {id: c.id}]);
      });
    };
  }
});
