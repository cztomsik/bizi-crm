import * as b from 'bizi';

class DashboardIndex extends b.Component{
  init(opts){
  }
}

DashboardIndex.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'Sign in'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Form, {},
      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Username'}],
        [b.TextField, {value: 'Username'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Password'}],
        [b.TextField, {value: 'Password'}]
      ],

      [b.Button, {text: 'Sign in'}]
    ]
  ]
];

export default DashboardIndex;
