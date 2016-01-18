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

    var self = this;

    router.listener = function(state){
      if (self.contents.length){
        self.contents[0].destroy();
      }

      self.contents = [new state.page(state.params)];
      self.render();
    };

    //router.goTo('customers-edit', {id: 1});
    router.goTo('customers-index');
    document.body.appendChild(this.el);
    console.log(this);
  }

  customersIndex(){
    return router.goTo('customers-index');
  }

  aboutIndex(){
    throw new Error('TODO: about page + route');
  }
}

CrmApp.tpl = [b.Div, {},
  [b.Navbar, {text: 'CrmApp'},
    [b.NavbarNav, {},
      [b.NavItem, {text: 'Customers', onClick: '() customersIndex'}],
      [b.NavItem, {text: 'About', onClick: '() aboutIndex'}]
    ]
  ],

  [b.Container, {children: '= contents'}],

  [b.Div, {cls: 'footer'},
    [b.Container, {},
      [b.Text, {value: 'Footer'}]
    ]
  ]
];

export default CrmApp;
