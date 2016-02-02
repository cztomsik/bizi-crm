import * as b from 'bizi';
import contactsService from './contacts-service';
import router from '../router';

class ContactsShow extends b.Component{
  init({id}){
    this.contact = {};

    return contactsService.getContact(id).then(c => this.contact = c);
  }

  edit(){
    return router.goTo('contacts-edit', {id: this.contact.id});
  }

  delete(){
    return contactsService.deleteContact(this.contact).then(() => {
      return router.goTo('contacts-index');
    });
  }
}

ContactsShow.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.ButtonGroup, {cls: 'pull-right'},
        [b.Button, {text: 'Edit', onClick: '() edit'}],
        [b.Button, {bg: 'danger', text: 'Delete', onClick: '() delete'}]
      ],

      // extra wrapper because of display: table
      [b.Div, {},
        [b.Div, {cls: 'media'},
          [b.Div, {cls: 'media-left'},
            [b.Image, {src: '//lorempixel.com/48/48/'}],
          ],
          [b.Div, {cls: 'media-body'},
            [b.Heading, {text: '= contact.name'}],
            [b.Span, {text: '= contact.company'}]
          ],
        ]
      ]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Nav, {type: 'tabs'},
      [b.NavItem, {text: 'One', cls: 'active'}],
      [b.NavItem, {text: 'Two'}],
      [b.NavItem, {text: 'Three'}],
      [b.NavItem, {text: 'Four'}]
    ],

    [b.Div, {cls: 'row'},
      [b.Div, {cls: 'col-sm-4'},
        [b.Span, {text: 'Job Title'}],
        [b.Span, {text: '= contact.jobTitle'}]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Span, {text: 'Company'}],
        [b.Span, {text: '= contact.company'}]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Span, {text: 'Phone'}],
        [b.Span, {text: '= contact.phone'}]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Span, {text: 'Email'}],
        [b.Span, {text: '= contact.email'}]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.Span, {text: 'Address'}],
        [b.Span, {text: '= contact.address'}]
      ],

      [b.Div, {cls: 'col-sm-12'},
        [b.Span, {text: 'Note'}],
        [b.Span, {text: '= contact.note'}]
      ],
    ]
  ]
];

export default ContactsShow;
