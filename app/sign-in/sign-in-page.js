import * as b from 'bizi';
import router from '../router';

class SignInPage extends b.Component{
  init(opts){
  }

  signIn(){
    router.goTo('contacts');
  }
}

SignInPage.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'Sign in'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Div, {cls: 'row'},
      [b.Div, {cls: 'col-sm-4'},
        [b.Form, {},
          [b.Div, {cls: 'form-group'},
            [b.Label, {text: 'Username'}],
            [b.TextField, {}]
          ],

          [b.Div, {cls: 'form-group'},
            [b.Label, {text: 'Password'}],
            [b.TextField, {}]
          ],

          [b.Button, {text: 'Sign in', onClick: '() signIn'}]
        ]
      ]
    ]
  ]
];

export default SignInPage;
