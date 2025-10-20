//https://www.youtube.com/watch?v=nFR7ef84rfY&list=PLU83Ru7iGtAtTlQ8MRGHCBu4tzATiRfmY&index=11
// Example 1: Hollow Square Pattern
// let i;
// let j;
// let row;
// let n = 5;

// for (i=1; i<=n; i++){
//     row = '';
//     for (j=1; j<=n; j++){
//        if(i == 1 || i == n || j == 1 || j == n){
//         row += '* ';
//     } else {
//         row += '  ';
//     }
// }
//     console.log(row);
// }



// Example 2: Right-Angled Triangle Pattern

// let i;
// let j;
// let row;
// let n = 11;

// console.log(Math.floor(n/2));

// for (i=0; i<n; i++){
//     row = '';
//     for (j=0; j<n; j++){
//        if(i == 0 || i == n-1 || j == 0 || j == n-1 || j == Math.floor(n/2) 
//         || i == Math.floor(n/2) || i == j || i + j == n - 1
//         || i + j == Math.floor(n/2) || i - j == Math.floor(n/2)
//         || i+j == (n - 1) + Math.floor(n/2)
//         || j - i == Math.floor(n/2)){
//         row += '* ';
//     } else {
//         row += '  ';
//     }
// }
//     console.log(row);
// }

// Nested Loop Explanation 5 rows 5 columns

let i;
let j;
let row;
let n = 5;

for (i=1; i<=n; i++){
    row = '';
    for (j=1; j<=n; j++){
       row += '* ';
    }
    console.log(row);
}