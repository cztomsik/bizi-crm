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
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href=".">Bizi CRM</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a ng-link=" ['HomePage'] ">Home <span class="sr-only">(current)</span></a></li>
              <li><a ng-link=" ['ContactListingPage'] ">Contacts</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">John Doe <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a ng-click=" $ctrl.signOut() ">Sign out</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

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
