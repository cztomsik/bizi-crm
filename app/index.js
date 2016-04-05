import * as b from 'bizi';
import appModule from './app-module';
import './home/home-page.js';
import './sign-in/sign-in-page.js';
import './contacts/contact-service.js';
import './contacts/contact-listing-page.js';
import './contacts/show-contact-page.js';
import './contacts/new-contact-page.js';
import './contacts/edit-contact-page.js';


appModule.value('$routerRootComponent', 'app');

appModule.component('app', {
  template: `
    <div class="app">
      <b-navbar class="navbar-inverse">
        <b-nav class="navbar-nav">
          <li><a ng-link=" ['HomePage'] ">Home</a></li>
          <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
        </b-nav>

        <b-nav class="navbar-nav navbar-right">
          <li class="dropdown">
            <a href="" data-toggle="dropdown">John Doe <i class="caret"></i></a>
            <ul class="dropdown-menu">
              <li><a ng-link=" ['SignInPage'] ">Sign out...</a></li>
            </ul>
          </li>
        </b-nav>
      </b-navbar>

      <b-sidebar ng-show>
        <b-nav>
          <li><a ng-link=" ['HomePage'] ">Home</a></li>
          <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
        </b-nav>
      </b-sidebar>

      <ng-outlet>
    </div>
  `,

  controller: function($rootRouter){
    this.signOut = function(){
      $rootRouter.navigate(['SignInPage']);
    };
  },

  $routeConfig: [
    {name: 'HomePage', path: '/home', component: 'homePage', useAsDefault: true},
    {name: 'SignInPage', path: '/sign-in', component: 'signInPage'},
    {name: 'ContactListingPage', path: '/contacts', component: 'contactListingPage'},
    {name: 'NewContactPage', path: '/contacts/new', component: 'newContactPage'},
    {name: 'ShowContactPage', path: '/contacts/:id', component: 'showContactPage'},
    {name: 'EditContactPage', path: '/contacts/:id/edit', component: 'editContactPage'}
  ]
});


const $ = window.$;

Object.keys(b).forEach((k) => {
  const Comp = b[k];
  const pluginName = 'b' + Comp.name;

  $.fn[pluginName] = function(options){
    return this.map(function(i, el){
      const $el = $(el);
      //const $contents = $el.contents();
      let comp = $el.data(pluginName);

      if (comp){
        comp.set(options);
        return el;
      }

      comp = new Comp(options);

      // TODO: ew
      //$(comp.domNode).find('content').replaceWith($contents);

      $el.replaceWith(comp.domNode);

      return $(comp.domNode).data(pluginName, comp)[0];
    });
  };
});

Object.keys(b).forEach((k) => {
  const Comp = b[k];
  const pluginName = 'b' + Comp.name;

  appModule.directive(pluginName, function($compile){
    return {
      restrict: 'E',
      priority: 599.9,
      compile: function($el, attrs){
        return {
          pre: function($scope, $el, attrs){
            const ngModel = $el.data('$ngModelController');
            const hostEl = $el[0];
            const options = {};

            // support text attributes
            for (let k in attrs){
              options[k] = attrs[k];
            }

            // TODO: map attributes
            options.className = options.class;

            if (ngModel){
              ngModel.$render = () => {
                $el[pluginName]({value: ngModel.$modelValue});
              };

              options.onValue = (e) => {
                ngModel.$setViewValue(e.target.value, e);
              };
            }

            // TODO: one-way bound attrs (datagrid items)

            const compNode = $el[pluginName](options)[0];
            compNode.host = hostEl;

            $el[0] = compNode;
          },

          post: function($scope, $el, attrs){
            $el.find('content').replaceWith($($el[0].host).contents());
            //const $contents = $el.contents();
            //$(comp.domNode).find('content').replaceWith($contents);
          }
        };
      }
    };
  });
});
