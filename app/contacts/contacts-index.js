import * as b from 'bizi';
import contactsService from './contacts-service';
import router from '../router';

class ContactsIndex extends b.Component{
  init(opts){
    this.contacts = [];

    this.columns = [
      {header: 'Name', tpl: [b.Link, {text: '= item.name', onClick: '= item.view'}]},
      {header: 'Company', tpl: [b.Span, {text: '= item.company'}]},
      {header: 'Job Title', tpl: [b.Span, {text: '= item.jobTitle'}]},
      {header: 'Email', tpl: [b.Link, {text: '= item.email', href: '= item.mailto'}]}
    ];

    return this.searchContacts('');
  }

  searchContacts(search){
    return contactsService.getContacts({search})
      .then(cs => cs.map((c) => {
        c.mailto = c.email && `mailto:${c.email}`;

        c.view = () => {
          router.goTo('contacts-show', {id: c.id});
        };

        return c;
      }))
      .then(cs => this.contacts = cs);
  }

  get summaryText(){
    return `${this.contacts.length} matches`;
  }

  new(){
    return router.goTo('contacts-new');
  }
}

ContactsIndex.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid clearfix'},
      [b.Heading, {text: 'Contacts', cls: 'pull-left'}],

      [b.Button, {text: 'New contact', onClick: '() new', cls: 'pull-right'}],
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [b.Div, {cls: 'row lead'},
      [b.Div, {cls: 'col-sm-8'},
        [b.Span, {text: '= summaryText'}]
      ],

      [b.Div, {cls: 'col-sm-4'},
        [b.TextField, {value: '', onValue: '() searchContacts', placeholder: 'Search...'}],
      ]
    ],

    [b.DataGrid, {columns: '= columns', items: '= contacts'}]
  ]
];

export default ContactsIndex;
