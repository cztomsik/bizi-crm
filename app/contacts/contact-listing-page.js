import angular from 'angular';

angular.module('app').component('contactListingPage', {
  template: `
    <div>
      <div class="jumbotron">
        <div class="container-fluid clearfix">
          <h3 class="pull-left">Contacts</h3>

          <a class="btn btn-default pull-right" ng-link=" ['NewContactPage'] ">New contact</a>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row lead">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <input placeholder="Search" ng-model="$ctrl.search" class="form-control" ng-change=" $ctrl.searchContacts($ctrl.search) ">
          </div>
        </div>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat=" c in $ctrl.contacts ">
              <td><a ng-link=" ['ShowContactPage', {id: c.id}] ">{{ c.name }}</a></td>
              <td>{{ c.company }}</td>
              <td>{{ c.jobTitle }}</td>
              <td><a href="mailto:{{c.email}}">{{ c.email }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  controller: function(contactService){
    this.contacts = null;
    this.search = '';

    this.searchContacts = function(search){
      contactService.getContacts({search}).then(cs => this.contacts = cs);
    };

    this.searchContacts();
  }
});
