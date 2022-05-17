// const array = [2, 3, 5, 1];

// // Push and Pop
// array.push("new element");
// console.log(array);
// array.pop();
// console.log(array);

// // includes
// console.log(array.includes(10));

// // indexOf
// console.log(array.indexOf(5));

// // sort
// // array.sort();
// // console.log(array);

// // slice
// // console.log(array.slice(0, 3));

// // reverse
// console.log(array.reverse());

// // Map
let blankArray = [];
let numbersArray = [1, 2, 3, 4, 5];
// let mappedArray = numbersArray.map((item, index) => ({
//   id: index,
//   value: item,
// }));

function multiply(arr) {
  return arr * 2;
}
const mappedArray = numbersArray.map((item) => multiply(item));
console.log(mappedArray);

const data = [
  { id: 1, name: "Jawad" },
  { id: 2, name: "Israr" },
  { id: 3, name: "Suhaib" },
  { id: 4, name: "Burhan " },
  { id: 5, name: "Arsalan" },
  { id: 6, name: "Mohib" },
];

const newMappedArray = data.map((item, index) => ({
  name: item.name,
  serviceId: index + item.id,
}));

console.log(newMappedArray);

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((item, index) => {
//   const newBox = document.createElement("h1");
//   newBox.innerText = index;
//   item.appendChild(newBox);
// });

// console.log(boxes);

// console.log(mappedArray);
// it takes an array an generate a new Array

// // Filter

// // Reduce

// // Some

// // Every
