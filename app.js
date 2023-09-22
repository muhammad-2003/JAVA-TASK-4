// todo CHAP 17-20

//! Q1. Declare and initialize an empty multidimensional array.
//! (Array of arrays)

// let multiArray = [
//     []
// ];

//! Q2. Declare and initialize a multidimensional array 
//! representing the following matrix

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

//! Q3 Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//! Q4. Write a program to print multiplication table of any 
//! number using for loop. Table number & length should be 
//! taken as an input from user

// const num = +prompt ("Enter the number for multiplication table:");
// const length = +prompt("Enter the length of the table:");

// for (let i = 1; i <= length; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }


//! Q5  Write a program to print items of the following array 
//! using for loop:
//! fruits = [“apple”, “banana”, “mango”, “orange”, 
//! “strawberry”]

// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//! Q6. Generate the following series in your browser. See 
//! example output.
//! a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//! b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//! c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//! d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//! e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting
// document.write("a. Counting: ");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br>");

// b. Reverse counting
// document.write("b. Reverse counting: ");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br>");

// c. Even
// document.write("c. Even: ");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>");

// d. Odd
// document.write("d. Odd: ");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br>");

// e. Series
// document.write("e. Series: ");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }


//! Q7. You have an array
//! A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//! Write a program to enable “search by user input” in an 
//! array.
//! After searching, prompt the user whether the given item is
//! found in the list or not.

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const userInput = prompt("Enter an item to search for:");

// let found = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log(`Yes, "${userInput}" is found in the list.`);
// } else {
//     console.log(`Sorry, "${userInput}" is not found in the list.`);
// }



// const A = [24, 53, 78, 91, 12];

// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log(`The largest number in the array is: ${largest}`);
