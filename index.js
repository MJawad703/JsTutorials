// Non Primitives
// 1- Arrays, 2- Objects and 3-Functions

// Arrays
let firstArray = [1, 22, 43, 24, 15, 16];

// it is placed logically on any index
// Location of the element in the array is called index
let number = firstArray[3];
console.log(firstArray);

// Objects

let Person = {
  name: "Israr",
  class: "Web",
  age: "25",
  address: "Islamabad",
  courses: ["Web", "SE", "DIT"],
  friends: {
    closeFriends: "ISRAR",
    normalFriends: "None",
  },
};
// normal way to access properties
console.log(Person.name);
// another way to access object properties
console.log(Person["name"]);

let statement = Person.name + " is living in " + Person.address;

console.log(statement);
