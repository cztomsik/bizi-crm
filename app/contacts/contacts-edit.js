import * as b from 'bizi';
import ContactForm from './_contact-form';
import contactsService from './contacts-service';
import router from '../router';

class ContactsEdit extends b.Component{
  init({id}){
    this.contact = {};

    return contactsService.getContact(id).then(c => this.contact = c);
  }

  update(){
    return contactsService.updateContact(this.contact).then(() => {
      return router.goTo('contacts-show', {id: this.contact.id});
    });
  }
}

ContactsEdit.tpl = [b.Div, {},
  [b.Div, {cls: 'jumbotron'},
    [b.Div, {cls: 'container-fluid'},
      [b.Heading, {text: 'Edit Contact'}],
      [b.Span, {text: '= contact.name'}]
    ]
  ],

  [b.Div, {cls: 'container-fluid'},
    [ContactForm, {contact: '= contact'}],

    [b.Button, {text: 'Update', onClick: '() update'}]
  ]
];

export default ContactsEdit;
