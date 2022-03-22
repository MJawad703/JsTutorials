// Loops and Conditions in JS

// Conditions
// If and Switch statement
// Based on a condition execute a block of code.

function logger(a) {
  // KFC
  // if(true){...} execute
  // Bring burger from KFC ... if it is closed then bring from MCG if that is closed as well bring from mcdonalds.
  if (a === "KFC") {
    console.log("Burger from KFC");
  } else if (a === "MCG") {
    console.log("Burger from MCG");
  } else {
    console.log("Burger from McDonalds");
  }
}

logger("MCG");

// assignment operator =
let a = "123";
let b = a;
// console.log(b);

// medium equality Comparision of Values "=="
let medium = 123 == "123";

// Tight Checking "===" Strict Checking
let strict = 123 === 123;
// 123 => number
// "123" => string
// compare the values
// Comparision of their types

// console.log(strict);

// Assignment 2

// Check for the parameter if its value is exact equal to 2 then multiply it with it self else if its value is exact equals to 10 divide it with it self. else add 20 to that parameter and substract 50 from it.
