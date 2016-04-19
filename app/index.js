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
        <b-wrapper class="nav navbar-nav">
          <li><a ng-link=" ['HomePage'] ">Home</a></li>
          <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
        </b-wrapper>

        <b-wrapper class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="" data-toggle="dropdown">John Doe <i class="caret"></i></a>
            <ul class="dropdown-menu">
              <li><a ng-link=" ['SignInPage'] ">Sign out...</a></li>
            </ul>
          </li>
        </b-wrapper>
      </b-navbar>

      <b-sidebar ng-if>
        <b-wrapper class="nav">
          <li><a ng-link=" ['HomePage'] ">Home</a></li>
          <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
        </b-wrapper>
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

appModule.directive('panes', ($compile, $timeout) => {
  return {
    restrict: 'E',
    // ng-repeat/ng-if is not required here
    priority: Number.MAX_VALUE,
    terminal: true,
    scope: true,
    compile: () => {
      return ($scope, $el) => {
        const $tabsEl = $el.parent();

        $compile($el.children())($scope);

        update();

        $scope.$on('pane', update);
        $el.remove();

        function update(){
          const panes = $el.children().get().map((el) => {
            return el.pane;
          });

          // at this point, instance is not linked
          $timeout(() => {
            if ($tabsEl[0].instance){
              $tabsEl[0].instance.set({panes});
            }
          });

          //console.log(panes);
        }
      };
    }
  };
});

appModule.directive('pane', () => {
  return {
    restrict: 'E',
    link: function($scope, $el, attrs){
      const pane = {
        header: attrs.header,
        contents: $el.contents()
      };

      $el[0].pane = pane;

      console.log('+pane');
      $scope.$emit('pane');

      $scope.$on('$destroy', () => {
        console.log('-pane');
        $scope.$emit('pane');
      });
    }
  };
});

// ngRepeat does not expect us to replace elements with entirely different nodes so it will try to "reorder"
// all repeated "blocks" - to do so it will call $animate.move()
//
// this hack is our only chance to prevent the mess it would do in DOM.
appModule.run(($animate) => {
  const animateMove = $animate.move;

  $animate.move = (element, parent, after, options) => {
    return animateMove((element && element[0].shadow) || element, parent, after, options);
  };
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
          options.onValue = (e) => {
            ngModel.$setViewValue(e.target.value);
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

        // see hack above
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
