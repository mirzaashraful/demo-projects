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

// array.reduce(reduceFuction, initialValue)
/*
  1. accumulator, currentValue,index, array, initialValue
*/

// const arr = [1,2,3,4,5]

// let sum = 0;

// for(let i=0; i < arr.length; i++){
//   sum = sum + arr[i];
// }

// console.log(sum)


// Total , avg bujate arrar reduce use korte hoy

let count = 0;
const total = customers.reduce((accumulator, customer, currentIndex, array) => {
  
  if(customer?.purchased?.includes('Book')) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0)

//console.log(total)

const avgAgeCustomerBookPurchased = Math.floor(total / count);
console.log(avgAgeCustomerBookPurchased);