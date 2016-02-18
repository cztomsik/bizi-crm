import * as b from 'bizi';
import contactService from './contact-service';
import router from '../router';

class ShowContactPage extends b.Component{
  init({id}){
    this.contact = {};

    return contactService.getContact(id).then(c => this.contact = c);
  }

  edit(){
    return router.goTo('contacts-edit', {id: this.contact.id});
  }

  delete(){
    return contactService.deleteContact(this.contact).then(() => {
      return router.goTo('contacts');
    });
  }
}

ShowContactPage.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Div, {cls: 'btn-group pull-right'},
        [b.Button, {text: 'Edit', onClick: '() edit'}],
        [b.Button, {text: 'More'}],
        [b.Button, {text: 'Delete', onClick: '() delete'}]
      ],

      // extra wrapper because of display: table
      [b.Div, {},
        [b.Div, {cls: 'media'},
          [b.Div, {cls: 'media-left'},
            [b.Image, {src: '//lorempixel.com/48/48/'}],
          ],
          [b.Div, {cls: 'media-body'},
            [b.Span, {text: '= contact.name', cls: 'show h3 m-a-0'}],
            [b.Span, {text: '= contact.company'}]
          ],
        ]
      ]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Div, {cls: 'row'},
      [b.Div, {cls: 'col-md-5'},
        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Job Title'}],
          [b.Span, {text: '= contact.jobTitle'}]
        ],

        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Company'}],
          [b.Span, {text: '= contact.company'}]
        ],

        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Phone'}],
          [b.Span, {text: '= contact.phone'}]
        ],

        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Email'}],
          [b.Span, {text: '= contact.email'}]
        ]
      ],

      [b.Div, {cls: 'col-md-7'},
        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Address'}],
          [b.Span, {text: '= contact.address'}]
        ],

        [b.Div, {cls: 'form-group'},
          [b.Label, {text: 'Note'}],
          [b.Span, {text: '= contact.note'}]
        ]
      ]
    ]
  ]
];

export default ShowContactPage;
