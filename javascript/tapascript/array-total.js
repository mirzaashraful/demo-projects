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

// console.log(customers);
// EXAMPLE 1 START
// maried customer array
const marriedCustomers = customers.filter((customer)=> {
  return (customer.married)
})

console.log(marriedCustomers)

// maried customer expance array
const expenseMapped = marriedCustomers.map((marriedCustomer) => {
  return marriedCustomer.expense
})

console.log(expenseMapped)

const totalExpanseMarriedCustomer = expenseMapped.reduce((accum, expanse) => {
  return accum + expanse
},0)

console.log(totalExpanseMarriedCustomer)

// EXAMPLE 1 END

// EXAMPLE 2 START  mathod chain

const total = 
     customers
             .filter(customer => customer.married)
             .map(married => married.expense)
             .reduce((accum, expanse) => accum + expanse) ;

             console.log('Total Taka', total)

// EXAMPLE 2 END
