// Customer Objects
let customers = [
  {
    'id': 001,
    'f_name': 'Abby',
    'l_name': 'Thomas',
    'gender': 'M',
    'married': true,
    'age': 32,
    'expense': 500,
    'purchased': ['Shampoo', 'Toys', 'Book']
  },
  {
    'id': 002,
    'f_name': 'Jerry',
    'l_name': 'Tom',
    'gender': 'M',
    'married': true,
    'age': 64,
    'expense': 100,
    'purchased': ['Stick', 'Blase']
  },
  {
    'id': 003,
    'f_name': 'Dianna',
    'l_name': 'Cherry',
    'gender': 'F',
    'married': true,
    'age': 22,
    'expense': 1500,
    'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
  },
  {
    'id': 004,
    'f_name': 'Dev',
    'l_name': 'Currian',
    'gender': 'M',
    'married': true,
    'age': 82,
    'expense': 90,
    'purchased': ['Book']
  },
  {
    'id': 005,
    'f_name': 'Maria',
    'l_name': 'Gomes',
    'gender': 'F',
    'married': false,
    'age': 7,
    'expense': 300,
    'purchased': ['Toys']
  }
]

//console.log(customers);

// Array map new array create kore old array k kiso kore na
   /*
   1. condition Full Name showing
   2. condtion Gender Male : Mr
   3. condtion Gender Title Famle Married : Mrs
   3. condtion Gender Title Famle Un Married : Miss
   */

   // customer object attribute add full_name  (customer['full_name']);
   /* Example 
   {
    "id": 1,
    "f_name": "Abby",
    "l_name": "Thomas",
    "gender": "M",
    "married": true,
    "age": 32,
    "expense": 500,
    "purchased": [
        "Shampoo",
        "Toys",
        "Book"
    ],
    "full_name": "Abby Thomas"
}

   */

   const customersWithFullName = customers.map((customer) => {

    let title = '';

    if(customer.gender === 'M'){
        title = 'Mr.';
    } else if(customer.gender === 'F' && customer.married) {
      title = 'Mrs.'
    } else {
      title = 'Miss'
    }

       customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;
       return customer;
   })

   console.log(customersWithFullName);