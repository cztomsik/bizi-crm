import angular from 'angular';
import './_contact-form';

angular.module('app').component('editContactPage', {
  template: `
    <b-page>
      <h3>
        Edit contact<br>
        <small>{{ $ctrl.contact.name }}</small>
      </h3>

      <contact-form contact=" $ctrl.contact "></contact-form>

      <b-button text="Update" $$on-click=" $ctrl.update() "></b-button>
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
