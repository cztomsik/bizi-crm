import * as b from 'bizi';
import appModule from './app-module';
import './home/home-page.js';
import './sign-in/sign-in-page.js';

import './accounts/accounts-service.js';
import './accounts/account-listing-page.js';
import './accounts/show-account-page.js';
import './accounts/new-account-page.js';
import './accounts/edit-account-page.js';

import './opportunities/opportunities-service.js';
import './opportunities/opportunity-listing-page.js';
import './opportunities/show-opportunity-page.js';
import './opportunities/new-opportunity-page.js';
import './opportunities/edit-opportunity-page.js';

import './contacts/contacts-service.js';
import './contacts/contact-listing-page.js';
import './contacts/show-contact-page.js';
import './contacts/new-contact-page.js';
import './contacts/edit-contact-page.js';


appModule.value('$routerRootComponent', 'app');

appModule.component('app', {
  template: `
    <div class="app">
      <b-navbar class="navbar-inverse">
        <div class="nav navbar-nav">
          <li><a ng-link=" ['HomePage'] ">Home</a></li>
          <li><a ng-link=" ['AccountListingPage'] ">Accounts</a></li>
          <li><a ng-link=" ['OpportunityListingPage'] ">Opportunities</a></li>
          <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
        </div>

        <div class="nav navbar-nav">
          <li class="dropdown">
            <a href="" data-toggle="dropdown">John Doe <i class="caret"></i></a>
            <ul class="dropdown-menu">
              <li><a ng-link=" ['SignInPage'] ">Sign out...</a></li>
            </ul>
          </li>
        </div>
      </b-navbar>

      <ng-outlet />

      <pre>{{ $ctrl.getPageTemplate() }}</pre>
    </div>
  `,

  controller: function($rootRouter, $injector){
    window.$injector = $injector;

    this.signOut = function(){
      $rootRouter.navigate(['SignInPage']);
    };

    this.getPageTemplate = function(){
      const pageDirective = $injector.get($rootRouter._childRouter.hostComponent + 'Directive')[0];

      return pageDirective.template;
    };
  },

  $routeConfig: [
    {name: 'HomePage', path: '/home', component: 'homePage', useAsDefault: true},
    {name: 'SignInPage', path: '/sign-in', component: 'signInPage'},

    {name: 'AccountListingPage', path: '/accounts', component: 'accountListingPage'},
    {name: 'NewAccountPage', path: '/accounts/new', component: 'newAccountPage'},
    {name: 'ShowAccountPage', path: '/accounts/:id', component: 'showAccountPage'},
    {name: 'EditAccountPage', path: '/accounts/:id/edit', component: 'editAccountPage'},

    {name: 'OpportunityListingPage', path: '/opportunities', component: 'opportunityListingPage'},
    {name: 'NewOpportunityPage', path: '/opportunities/new', component: 'newOpportunityPage'},
    {name: 'ShowOpportunityPage', path: '/opportunities/:id', component: 'showOpportunityPage'},
    {name: 'EditOpportunityPage', path: '/opportunities/:id/edit', component: 'editOpportunityPage'},

    {name: 'ContactListingPage', path: '/contacts', component: 'contactListingPage'},
    {name: 'NewContactPage', path: '/contacts/new', component: 'newContactPage'},
    {name: 'ShowContactPage', path: '/contacts/:id', component: 'showContactPage'},
    {name: 'EditContactPage', path: '/contacts/:id/edit', component: 'editContactPage'}
  ]
});




Object.keys(b).forEach((k) => {
  const Comp = b[k];
  const pluginName = 'b' + Comp.name;

  appModule.directive(pluginName, () => {
    return {
      restrict: 'E',
      link: ($scope, $el, attrs) => {
        const $$observers = attrs.$$observers || attrs.$observers;
        const ngModel = attrs.ngModel && $el.data('$ngModelController');
        const options = {
          contents: $el.contents().get()
        };

        let instance;

        for (let k in attrs.$attr){
          if (k.startsWith('$$')){
            options[k.slice(2)] = () => {
              $scope.$eval(attrs[k]);
              $scope.$apply();
            };
            continue;
          }

          if (k.startsWith('$')){
            bind(k.slice(1), attrs[k]);
            continue;
          }

          options[k] = attrs[k];
        }


        // TODO: attr => prop mapping
        options.className = options.class;
        delete options.class;

        if (ngModel){
          options.onValue = (sender) => {
            ngModel.$setViewValue(sender.value);
          };
        }

        instance = new Comp(options);

        $el[0].instance = instance;

        if ($$observers){
          Object.keys($$observers).forEach((k) => {
            attrs.$observe(k, (v) => {
              instance.set({[k]: v});
            });
          });
        }

        if (ngModel){
          ngModel.$render = () => {
            instance.set({value: ngModel.$modelValue});
          };
        }

        $el.on('$destroy', () => {
          instance.el.parentNode.removeChild(instance.el);
        });

        $el[0].parentNode.replaceChild(instance.el, $el[0]);
        $el[0].shadow = instance.el;


        function bind(propName, expression){
          options[propName] = $scope.$eval(expression);

          $scope.$watch(expression, (v) => {
            instance.set({[propName]: v});
          });
        }
      }
    };
  });
});
