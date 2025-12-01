// function example(car) {
//     console.log("car" + car);
// };

// let c1 = 
// { 
//     make: "Toyota", 
//     model: "Corolla"
// }; 
// example(c1);

// function exam(fun) {
//     fun(100,200);
// }
// function add(a,b) {
//     console.log("Sum is: " + (a+b));
// }   

// exam(add);

let userName = "Rubel";
let userRole = "Admin";

function checkAccess() {

    let hasAccess = false;

    if (userRole === "Admin") {
         let welcomeMessage = `Welcome, ${userName}! You have full access.`;
      
         hasAccess = true;

         console.log(welcomeMessage);
      }
      console.log("Has Access:", hasAccess); // Error: welcomeMessage is not defined
     };
 console.log(welcomeMessage); // Error: welcomeMessage is not defined
     checkAccess();