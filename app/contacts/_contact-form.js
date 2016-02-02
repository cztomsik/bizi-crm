import * as b from 'bizi';

class ContactsForm extends b.Component{
  init({contact = {}}){
    this.contact = contact;
  }
}

ContactsForm.tpl = [b.Form, {},
  [b.Div, {cls: 'row'},
    [b.Div, {cls: 'col-sm-6'},
      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Name'}],
        [b.TextField, {value: '& contact.name'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Company'}],
        [b.TextField, {value: '& contact.company'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Job Title'}],
        [b.TextField, {value: '& contact.jobTitle'}]
      ]
    ],

    [b.Div, {cls: 'col-sm-6'},
      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Phone'}],
        [b.TextField, {value: '& contact.phone'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Email'}],
        [b.TextField, {value: '& contact.email'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Address'}],
        [b.TextArea, {value: '& contact.address'}]
      ],

      [b.Div, {cls: 'form-group'},
        [b.Label, {text: 'Note'}],
        [b.TextArea, {value: '& contact.note'}]
      ]
    ]
  ]
];

export default ContactsForm;
