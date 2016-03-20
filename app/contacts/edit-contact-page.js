import angular from 'angular';
import './_contact-form';

angular.module('app').component('editContactPage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid">
          <h3>
            Edit contact<br>
            <small>{{ $ctrl.contact.name }}</small>
          </h3>
        </div>
      </div>

      <div class="container-fluid">
        <contact-form contact=" $ctrl.contact "></contact-form>

        <button class="btn btn-primary" ng-click=" $ctrl.update() ">Update</button>
      </div>
    </div>
  `,

  controller: function(contactService){
    this.contact = null;

    this.$routerOnActivate = function(next){
      contactService.getContact(next.params.id).then(c => this.contact = c);
    };

    this.update = function(){
      return contactService.updateContact(this.contact).then((c) => {
        return this.$router.navigate(['ShowContactPage', {id: c.id}]);
      });
    };
  }
});
