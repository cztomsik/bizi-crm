import * as b from 'bizi';

class CustomersForm extends b.Component{
  init({customer = {}}){
    this.customer = customer;
  }
}

CustomersForm.tpl = [b.Form, {},
  [b.Row, {},
    [b.Col, {sm: 6},
      [b.FormGroup, {label: 'Name'},
        [b.TextInput, {value: '& customer.name'}]
      ],

      [b.FormGroup, {label: 'Company'},
        [b.TextInput, {value: '& customer.company'}]
      ],

      [b.FormGroup, {label: 'Job Title'},
        [b.TextInput, {value: '& customer.jobTitle'}]
      ]
    ],

    [b.Col, {sm: 6},
      [b.FormGroup, {label: 'Phone'},
        [b.TextInput, {value: '& customer.phone'}]
      ],

      [b.FormGroup, {label: 'Email'},
        [b.TextInput, {value: '& customer.email'}]
      ],

      [b.FormGroup, {label: 'Address'},
        [b.Textarea, {value: '& customer.address'}]
      ],

      [b.FormGroup, {label: 'Note'},
        [b.Textarea, {value: '& customer.note'}]
      ]
    ]
  ]
];

export default CustomersForm;
