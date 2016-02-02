import * as b from 'bizi';

class DashboardIndex extends b.Component{
  init(opts){
  }
}

DashboardIndex.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'Dashboard'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Div, {cls: 'alert alert-info alert-dismissable'},
      [b.Span, {text: 'Please read updated '}],
      [b.Link, {text: 'guidelines'}],
      [b.Link, {text: '×', cls: 'close'}]
    ],

    [b.Div, {cls: 'row'},
      [b.Div, {cls: 'col-sm-3'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-body bg-default'},
            [b.Heading, {text: '201'}],
            [b.Span, {text: 'Customers'}]
          ]
        ]
      ],

      [b.Div, {cls: 'col-sm-3'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-body bg-default'},
            [b.Heading, {text: '$ 1,500'}],
            [b.Span, {text: 'New opportunities'}]
          ]
        ]
      ],

      [b.Div, {cls: 'col-sm-3'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-body bg-default'},
            [b.Heading, {text: '$ 14,000'}],
            [b.Span, {text: 'Open opportunities'}]
          ]
        ]
      ],

      [b.Div, {cls: 'col-sm-3'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-body bg-default'},
            [b.Heading, {text: '+ 49 %'}],
            [b.Span, {text: 'Success ratio'}]
          ]
        ]
      ]
    ],

    [b.Div, {cls: 'row'},
      [b.Div, {cls: 'col-sm-4'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-heading'},
            [b.Span, {text: 'Recent items'}]
          ],

          [b.Div, {cls: 'panel-body'},
            [b.Span, {text: 'panel body'}]
          ]
        ]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-heading p-b-0'},
            [b.Span, {text: 'Heading', cls: 'pull-left'}],

            [b.Nav, {type: 'tabs'},
              [b.NavItem, {cls: 'active', text: 'One'}],
              [b.NavItem, {text: 'Two'}]
            ]
          ],

          [b.Div, {cls: 'panel-body'},
            [b.Span, {text: 'panel body'}]
          ]
        ]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Div, {cls: 'panel panel-default'},
          [b.Div, {cls: 'panel-heading p-a-0'},
            [b.Image, {src: '//lorempixel.com/300/200', cls: 'img-responsive text-truncate'}]
          ],

          [b.Div, {cls: 'panel-body'},
            [b.Span, {text: 'panel body'}]
          ]
        ]
      ]
    ]
  ]
];

export default DashboardIndex;
