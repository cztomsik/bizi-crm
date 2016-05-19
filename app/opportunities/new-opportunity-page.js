import angular from 'angular';
import opportunitiesService from './opportunities-service';
import './_opportunity-form';

angular.module('app').component('newOpportunityPage', {
  template: `
    <b-page>
      <h3>New opportunity</h3>

      <!-- angular component -->
      <opportunity-form opportunity=" $ctrl.opportunity "></opportunity-form>

      <b-button text="Create" ng-click=" $ctrl.create() "></b-button>
    </b-page>
  `,

  controller: class NewOpportunityPageController{
    constructor($rootRouter){
      this.$rootRouter = $rootRouter;

      this.opportunity = {
        name: null
      };
    }

    create(){
      return opportunitiesService.createOpportunity(this.opportunity).then((o) => {
        return this.$rootRouter.navigate(['ShowOpportunityPage', {id: o.id}]);
      });
    }
  }
});
