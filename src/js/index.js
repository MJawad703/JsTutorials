let array = [1, 2, 3, 4, 10, 182, 123, 123];
let newArray = [...array, 4];

let randomArray = [...array, ...newArray];

const sumArray = [1, 2, 3];

const sum = (a, b, c) => {
  return a + b + c;
};
console.log(sum(...sumArray));

const logger = (...elements) => {
  console.log(...elements);
};

logger(...randomArray);

let person = {
  name: "Suhaib",
  age: "25",
  // 100000
};

let newObject = { ...person, profession: "Web Dev", skills: "JS" };
// {
//   name: "suhaib",
//   age: 25,
//   profession: "Web Dev"
// }

console.log(newObject);
logger();

const newObjectCreator = (obj, obj1) => {
  return {
    ...obj,
    ...obj1,
  };
};

const arr = [1, 2];
const obj = { name: 1 };
const newArrrr = [...arr, { ...obj }];

const newObj = newObjectCreator(person, newObject);
console.log(newArrrr);
