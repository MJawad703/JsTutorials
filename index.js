// Lecture 2

// Creating objects with new Object.

let person1 = "Suhaib";
let person1Job = "Web dev";
let person1Age = 25;

let person2 = "israr";
let person2Job = "Web dev";
let person2Age = 25;

let personOne = {
  name: "Suhaib",
  job: "Web dev",
  age: 25,
};
// Objects literals
//JSON => JS OBJECT NOTATION

let personTwo = new Object();
// personTwo is an EmptyObject
personTwo.name = "Israr";
personTwo.age = 25;
personTwo.job = "Web dev";

// every thing in JS is treated like an Object.

// NonPrimitives Functions

function helloWorld() {
  console.log("Hello");
}

// Arguments
function mulitpyByTwo(a) {
  const b = 2;
  console.log(a * b);
}

2 + 2;
2 - 2;
2 * 2;
2 / 2;

helloWorld();

mulitpyByTwo(2);
