import * as b from 'bizi';
import router from './router';
import routes from './routes';

class CrmApp extends b.Component{
  init(){
    this.contents = [];
  }

  run(){
    // routes should only be referenced from top-level module
    router.routes = routes;

    router.listener = (state) => {
      if (this.page){
        this.page.destroy();
      }

      this.page = new state.page(state.params);
      this.contents = [this.page.el];
      this.render();
    };

    //router.goTo('sign-in');
    //router.goTo('dashboard');
    //router.goTo('contacts');
    router.goTo('contacts-show', {id: 1});
    //router.goTo('contacts-edit', {id: 1});
    document.body.appendChild(this.el);
    console.log(this);
  }

  contactsIndex(){
    return router.goTo('contacts');
  }

  dashboardIndex(){
    return router.goTo('dashboard');
  }

  signOut(){
    return router.goTo('sign-in');
  }

  destroy(){
    this.page.destroy();
    this.contents = [];
    this.render();
    super.destroy();
  }
}

CrmApp.tpl = [b.Div, {},
  [b.Div, {cls: 'navbar navbar-static-top m-a-0 navbar-inverse'},
    [b.Div, {cls: 'container-fluid'},
      [b.Div, {cls: 'navbar-header'},
        [b.Link, {text: 'Bizi CRM', href: '/', cls: 'navbar-brand'}],

        // TODO: bars
        [b.Link, {cls: 'navbar-toggle collapsed', text: 'Toggle navigation', toggle: 'collapse', toggleTarget: '.navbar-collapse'}]
      ],

      [b.Div, {cls: 'collapse navbar-collapse'},
        [b.Nav, {cls: 'navbar-nav'},
          [b.NavItem, {text: 'Dashboard', onClick: '() dashboardIndex'}],
          [b.NavItem, {text: 'Contacts', onClick: '() contactsIndex'}],
        ],

        // should not collapse?
        [b.Nav, {cls: 'navbar-nav navbar-right'},
          [b.NavDropdown, {text: 'John Doe'},
            [b.NavItem, {text: 'Sign out', onClick: '() signOut'}]
          ]
        ]
      ]
    ]
  ],

  [b.Div, {children: '= contents'}]
];

export default CrmApp;
