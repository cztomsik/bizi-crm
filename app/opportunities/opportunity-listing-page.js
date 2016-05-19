import angular from 'angular';
import opportunitiesService from './opportunities-service';

angular.module('app').component('opportunityListingPage', {
  template: `
    <b-page>
      <h2>Opportunities</h2>
      <a class="btn btn-default" ng-link=" ['NewOpportunityPage'] ">New opportunity</a>

      <b-data-table
        $columns=" [
          {header: 'Name', key: 'name'},
          {header: 'Account', key: 'account.name'}
        ] "

        $items="$ctrl.opportunities"
      />
    </b-page>
  `,

  controller: class OpportunityListingPageController{
    constructor(){
      this.opportunities = null;
    }

    $routerOnActivate(){
      opportunitiesService.getOpportunities().then(os => this.opportunities = os);
    }
  }
});
