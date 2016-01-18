import * as b from 'bizi';
import CustomerForm from './_customer-form';
import customersService from './customers-service';
import router from '../router';

class CustomersEdit extends b.Component{
  init({id}){
    this.customer = {};

    return customersService.getCustomer(id).then(c => this.customer = c);
  }

  update(){
    return customersService.updateCustomer(this.customer).then(() => {
      return router.goTo('customers-show', {id: this.customer.id});
    });
  }
}

CustomersEdit.tpl = [b.Page, {},
  [b.PageHeader, {},
    [b.Heading, {text: 'Edit Customer', smallText: '= customer.name'}]
  ],
  [CustomerForm, {customer: '= customer'}],

  [b.Btn, {text: 'Update', onClick: '() update'}]
];

export default CustomersEdit;
