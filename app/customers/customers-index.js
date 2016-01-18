import * as b from 'bizi';
import customersService from './customers-service';
import router from '../router';

class CustomersIndex extends b.Component{
  init(opts){
    this.customers = [];

    return this.searchCustomers('');
  }

  searchCustomers(search){
    return customersService.getCustomers({search}).then(cs => this.customers = cs);
  }

  get summaryText(){
    return `${this.customers.length} matches`;
  }

  new(){
    return router.goTo('customers-new');
  }
}

CustomersIndex.tpl = [b.Page, {},
  [b.PageHeader, {},
    [b.Heading, {text: 'Customers'}],

    [b.Btn, {text: 'New customer', onClick: '() new'}]
  ],

  [b.Div, {},
    [b.Row, {},
      [b.Col, {sm: 8},
        [b.Text, {value: '= summaryText'}]
      ],

      [b.Col, {sm: 4},
        [b.TextInput, {value: '', onValue: '() searchCustomers', placeholder: 'Search...'}],
      ]
    ],

    [b.Datagrid, {items: '= customers'}]
  ]
];

export default CustomersIndex;
