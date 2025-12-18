//* String Operations

// both string concatination
let str1 = "hello";
let str2 = "Asim";

let str3 = str1 + str2;
console.log(str3);


//* ECMA - 7.1.1 ToPrimitive
//! concatination when one is string & other is number cases 

//1 
console.log("1" + 2); // => 12

//2
console.log(1 + "2"); // => 12

//3 string and two numbers
console.log("1" + 2 + 2); // => 122
//? so why (same datatypes) numbers are not adding ? 

//4 start with two numbers datatype and end with string
console.log(1 + 2 + "2"); // => 32
//? so why this time numbers get added 

//* All these operations nature is define with some rules, when to choose which opeartion and how to treat datatype (For deep info check ECMA)



//! Avoid these operations syntax, Make code more readable

//* #1
console.log(3 + 4 * 5 % 3); // => 5
// Due to no paranthesis order of operations maybe not as you expected it follow ECMA rules, It is Bad practice

// use paranthesis to get your desire order of operations
console.log(((3 + 4) * 5) % 3); // => 2


//* #2
console.log(+true); // => 1 //! Avoid

console.log(+""); // => 0 //! Avoid


//* #3
let num1, num2, num3;

num1 = num2= num3 = 2 + 2; //! Avoid


//* #4 Topic - (not wrong pratice, we use it, Recommened  incrementale operators (preffix & suffix ). Visit MDN 

// in loops it show different behavious, here it showing same suffix behavious for both

let couter = 100;
console.log(++couter);
console.log(couter++);







