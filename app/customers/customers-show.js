import * as b from 'bizi';
import customersService from './customers-service';
import router from '../router';

class CustomersShow extends b.Component{
  init({id}){
    this.customer = {};

    return customersService.getCustomer(id).then(c => this.customer = c);
  }

  edit(){
    return router.goTo('customers-edit', {id: this.customer.id});
  }

  delete(){
    return customersService.deleteCustomer(this.customer).then(() => {
      return router.goTo('customers-index');
    });
  }

  get customerSmallText(){
    return `${this.customer.jobTitle} at ${this.customer.company}`;
  }
}

CustomersShow.tpl = [b.Page, {},
  [b.PageHeader, {},
    [b.Row, {},
      [b.Col, {sm: 6},
        [b.Text, {value: 'Back to contacts...'}],
        [b.Heading, {text: '= customer.name', smallText: '= customerSmallText'}]
      ],

      [b.Col, {sm: 3},
        [b.Image, {src: '//lorempixel.com/100/100/'}]
      ],

      [b.Col, {sm: 3},
        [b.Btn, {text: 'Edit', onClick: '() edit'}],
        [b.Btn, {type: 'danger', text: 'Delete', onClick: '() delete'}]
      ]
    ]
  ],

  [b.Row, {},
    [b.Col, {sm: 4},
      [b.Heading, {smallText: 'Phone'}],
      [b.Text, {value: '= customer.phone'}]
    ],

    [b.Col, {sm: 4},
      [b.Heading, {smallText: 'Email'}],
      [b.Text, {value: '= customer.email'}]
    ],

    [b.Col, {sm: 4},
      [b.Heading, {smallText: 'Address'}],
      [b.Text, {value: '= customer.address'}]
    ],

    [b.Col, {sm: 12},
      [b.Heading, {smallText: 'Note'}],
      [b.Text, {value: '= customer.note'}]
    ],
  ]
];

export default CustomersShow;
