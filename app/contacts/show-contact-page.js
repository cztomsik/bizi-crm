import angular from 'angular';

angular.module('app').component('showContactPage', {
  template: `
    <b-page>
      <b-jumbotron>
        <b-container>
          <div class="btn-group pull-right">
            <b-button text="Edit" ng-click=" $ctrl.edit() "></b-button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a ng-click=" $ctrl.clone() ">Clone</a></li>
              <li role="separator" class="divider"></li>
              <li><a ng-click=" $ctrl.delete() ">Delete</a></li>
            </ul>
          </div>

          <div class="media">
            <div class="media-left">
              <img src="//dummyimage.com/48x48/000/fff/">
            </div>
            <div class="media-body">
              <h3 class="media-heading">{{ $ctrl.contact.name }}</h3>
              {{ $ctrl.contact.company }}
            </div>
          </div>
        </b-container>
      </b-jumbotron>

      <b-container>
        <div class="row">
          <div class="col-sm-5">
            <b-form-group>
              <label>Name</label>
              <p class="form-control-static">{{ $ctrl.contact.name }}</p>
            </b-form-group>

            <b-form-group>
              <label>Company</label>
              <p class="form-control-static">{{ $ctrl.contact.company }}</p>
            </b-form-group>

            <b-form-group>
              <label>Job Title</label>
              <p class="form-control-static">{{ $ctrl.contact.jobTitle }}</p>
            </b-form-group>

            <b-form-group>
              <label>Phone</label>
              <p class="form-control-static">{{ $ctrl.contact.phone }}</p>
            </b-form-group>

            <b-form-group>
              <label>Email</label>
              <p class="form-control-static">{{ $ctrl.contact.email }}</p>
            </b-form-group>
          </div>
          <div class="col-sm-7">
            <b-form-group>
              <label>Address</label>
              <p class="form-control-static">{{ $ctrl.contact.address }}</p>
            </b-form-group>

            <b-form-group>
              <label>Note</label>
              <p class="form-control-static">{{ $ctrl.contact.note }}</p>
            </b-form-group>
          </div>
        </div>
      </b-container>
    </b-page>
  `,

  controller: function(contactService, $rootRouter){
    this.contact = null;

    this.$routerOnActivate = function(next){
      contactService.getContact(next.params.id).then(c => this.contact = c);
    };

    this.edit = function(){
      return $rootRouter.navigate(['EditContactPage', {id: this.contact.id}]);
    };

    this.clone = function(){
      window.alert('TODO');
    };

    this.delete = function(){
      return contactService.deleteContact(this.contact.id).then(() => {
        return $rootRouter.navigate(['ContactListingPage']);
      });
    };
  }
});
