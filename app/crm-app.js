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
      if (this.contents.length){
        this.contents[0].destroy();
      }

      this.contents = [new state.page(state.params)];
      this.render();
    };

    //router.goTo('sign-in-index');
    router.goTo('dashboard-index');
    //router.goTo('contacts-show', {id: 1});
    //router.goTo('contacts-edit', {id: 1});
    //router.goTo('contacts-index');
    document.body.appendChild(this.el);
    console.log(this);
  }

  contactsIndex(){
    return router.goTo('contacts-index');
  }

  dashboardIndex(){
    return router.goTo('dashboard-index');
  }

  signOut(){
    return router.goTo('sign-in-index');
  }

  destroy(){
    this.contents[0].destroy();
    this.contents = [];
    this.render();
    super.destroy();
  }
}

CrmApp.tpl = [b.Div, {},
  [b.Div, {cls: 'navbar navbar-inverse navbar-static-top m-a-0'},
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
