// https://www.youtube.com/watch?v=TqhfLDb-uQ8

// Challenges - 7 Simple Logic-Building Challenges
// 1. Check if a number is a palindrome
//  Example: 121 -> palindrome, 123 -> not palindrome
//  Hint: Convert to string and compare forward vs backward

// 2. Count vowels in a string
//  Example: "hello world" => 3 vowels
//  Hint: Loop through each character or use .includes().

// 3. Find the largest number in an array
//  Example: [2,9,1,7,3] -> 9
//  Hint: Use a loop or Math.max() with the spread operator.

// 4. Print the Fibonacci sequence up to N terms
//  Example: N = 6 -> 0,1,1,2,3,5
//  Hint: Use a loop and store previous two values.

// 5. Count how many times a specific word appears in a sentence
//  Example: "I love coding because coding is fun" -> "coding" appears 2 times
//  Hint: Split the string and loop through the words.

// 6. Find the factorial of a number
//  Example: 5! = 5x4x3x2x1 = 120
//  Hint: Use a for loop or recursion

// 7. Find duplicate elements in an array
//  Example: [2,4,2,5,4,7] -> 2,4
//  Hint: Use an object or Set to track counts

//1. Check if a number is a palindrome
function isPalindrome(num) {
    let strNum = num.toString();
    let reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
}
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false

//2. Count vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world")); // Output: 3

//3. Find the largest number in an array
function findLargest(arr) {
    return Math.max(...arr);
}   
console.log(findLargest([2,9,1,7,3])); // Output: 9

//4. Print the Fibonacci sequence up to N terms
function fibonacciSequence(N) {
    let fibSeq = [0, 1];        

    for (let i = 2; i < N; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq.slice(0, N);
}
console.log(fibonacciSequence(6)); // Output: [0, 1, 1, 2, 3, 5]

//5. Count how many times a specific word appears in a sentence
function countWordOccurrences(sentence, word) {
    let words = sentence.split(' ');    
    let count = 0;
    for (let w of words) {
        if (w === word) {
            count++;
        }   
    }
    return count;
}   
console.log(countWordOccurrences("I love coding because coding is fun", "coding")); // Output: 2

//6. Find the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;           
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }   
    return result;
}
console.log(factorial(5)); // Output: 120

//7. Find duplicate elements in an array
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set(); 
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }   
    }
    return Array.from(duplicates);
}   
console.log(findDuplicates([2,4,2,5,4,7])); // Output: [2, 4]


