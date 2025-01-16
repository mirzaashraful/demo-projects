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
  },
  {
    'id': 006,
    'f_name': 'Umme',
    'l_name': 'Sadika',
    'gender': 'F',
    'married': false,
    'age': 6,
    'expense': 300,
    'purchased': []
  }
]

// console.log(customers);

const isThereAWindowShopper = customers.some((customer) => {
  return customer?.purchased?.length === 0;
})

console.log(isThereAWindowShopper);