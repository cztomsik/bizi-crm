import * as b from 'bizi';

class DashboardPage extends b.Component{
  init(opts){
  }
}

DashboardPage.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'Dashboard'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Span, {text: 'TODO'}]
  ]
];

export default DashboardPage;
