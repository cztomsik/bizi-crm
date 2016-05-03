import angular from 'angular';

angular.module('app').component('contactListingPage', {
  template: `
    <b-page>
      <div class="clearfix">
        <a class="btn btn-default pull-right" ng-link=" ['NewContactPage'] ">New contact</a>
        <h3 class="pull-left">Contacts</h3>
      </div>

      <pre class="well">{{ $ctrl.selectedContact }}</pre>

      <b-select
        $items=" $ctrl.contacts "
        ng-model=" $ctrl.selectedContact "
      />

      <b-nav
        class="nav-tabs"
        $items=" $ctrl.contacts "
        ng-model=" $ctrl.selectedContact "
      />

      <b-list
        $items=" $ctrl.contacts "
        ng-model=" $ctrl.selectedContact "
      />

      <br>


      <div class="row lead">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <b-text-input placeholder="Search" ng-model="$ctrl.search" ng-change=" $ctrl.searchContacts($ctrl.search) " />
        </div>
      </div>

      <b-data-table
        $columns=" [
          {header: 'Name', key: 'name'},
          {header: 'Company', key: 'company'},
          {header: 'Job Title', key: 'jobTitle'},
          {header: 'Email', key: 'email'}
        ] "

        $items="$ctrl.contacts"
      />

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
    </b-page>
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
