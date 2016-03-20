import * as b from 'bizi';
import router from '../router';

class SignInPage extends b.Component{
  init(){
    this.error = null;

    this.username = 'admin';
    this.password = 'admin';
  }

  signIn(){
    if ((this.username === 'admin') && (this.password === 'admin')){
      return router.go('contacts');
    }

    this.error = 'Try admin/admin';
  }
}

SignInPage.tpl = [b.Div, {},
  [b.Div, {css: 'jumbotron'},
    [b.Div, {css: 'container-fluid'},
      [b.Heading, {text: 'Sign in'}]
    ]
  ],

  [b.Div, {css: 'container-fluid'},
    [b.Div, {css: 'alert alert-danger'},
      [b.Span, {text: '= error'}]
    ],

    [b.Div, {css: 'row'},
      [b.Div, {css: 'col-sm-4'},
        [b.Form, {},
          [b.Div, {css: 'form-group'},
            [b.Label, {text: 'Username'}],
            [b.TextField, {value: '& username'}]
          ],

          [b.Div, {css: 'form-group'},
            [b.Label, {text: 'Password'}],
            [b.TextField, {value: '& password'}]
          ],

          [b.Button, {text: 'Sign in', onClick: '() signIn'}]
        ]
      ]
    ]
  ]
];

export default SignInPage;
