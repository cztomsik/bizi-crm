import angular from 'angular';

angular.module('app').component('showContactPage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid">
          <div class="btn-group pull-right">
            <button class="btn btn-default" ng-link=" ['EditContactPage', {id: $ctrl.contact.id}] ">Edit</button>
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a ng-click=" $ctrl.delete() ">Delete</a></li>
            </ul>
          </div>

          <div class="media">
            <div class="media-left">
              <img src="//lorempixel.com/48/48/">
            </div>
            <div class="media-body">
              <h3 class="media-heading">{{ $ctrl.contact.name }}</h3>
              {{ $ctrl.contact.company }}
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-5">
            <div class="form-group">
              <label>Name</label>
              <p class="form-control-static">{{ $ctrl.contact.name }}</p>
            </div>

            <div class="form-group">
              <label>Company</label>
              <p class="form-control-static">{{ $ctrl.contact.company }}</p>
            </div>

            <div class="form-group">
              <label>Job Title</label>
              <p class="form-control-static">{{ $ctrl.contact.jobTitle }}</p>
            </div>

            <div class="form-group">
              <label>Phone</label>
              <p class="form-control-static">{{ $ctrl.contact.phone }}</p>
            </div>

            <div class="form-group">
              <label>Email</label>
              <p class="form-control-static">{{ $ctrl.contact.email }}</p>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="form-group">
              <label>Address</label>
              <p class="form-control-static">{{ $ctrl.contact.address }}</p>
            </div>

            <div class="form-group">
              <label>Note</label>
              <p class="form-control-static">{{ contact.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  controller: function(contactService){
    this.contact = null;

    this.$routerOnActivate = function(next){
      contactService.getContact(next.params.id).then(c => this.contact = c);
    };

    this.delete = function(){
      return contactService.deleteContact(this.contact.id).then(() => {
        return this.$router.navigate(['ContactListingPage']);
      });
    };
  }
});
