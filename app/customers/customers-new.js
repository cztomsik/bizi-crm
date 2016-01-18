import * as b from 'bizi';
import CustomerForm from './_customer-form';
import customerService from './customers-service';
import router from '../router';

class CustomersNew extends b.Component{
  init(opts){
    this.customer = {
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
    return customerService.createCustomer(this.customer).then((c) => {
      return router.goTo('customers-show', {id: c.id});
    });
  }
}

CustomersNew.tpl = [b.Page, {},
  [b.PageHeader, {},
    [b.Heading, {text: 'New Customer', smallText: '= customer.name'}]
  ],
  [CustomerForm, {customer: '= customer'}],

  [b.Btn, {text: 'Create', onClick: '() create'}]
];

export default CustomersNew;
