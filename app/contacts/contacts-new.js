import * as b from 'bizi';
import ContactForm from './_contact-form';
import contactService from './contacts-service';
import router from '../router';

class ContactsNew extends b.Component{
  init(opts){
    this.contact = {
      name: null,
      company: null,
      jobTitle: null,
      phone: null,
      email: null,
      address: null,
      note: null
    };
  }

  create(){
    return contactService.createContact(this.contact).then((c) => {
      return router.goTo('contacts-show', {id: c.id});
    });
  }
}

ContactsNew.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'New Contact'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [ContactForm, {contact: '= contact'}],

    [b.Button, {text: 'Create', onClick: '() create'}]
  ]
];

export default ContactsNew;
