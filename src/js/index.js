const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

// callback functions, named function
array.forEach(function (e, index) {
  console.log(`This is value : ${e} and this is index ${index}`);
});
// event
// Arrow version
array.forEach((e, index) =>
  console.log(`This is value of arrow : ${e} and this is index ${index}`)
);
// function nameSpace(name) {
//   name();
// }

// nameSpace(function () {
//   console.log("Name is Jawad");
// });

// higher order function
