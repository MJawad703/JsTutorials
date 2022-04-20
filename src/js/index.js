// ecmaScript 6
// arrow function
// var let const
// spread
// destructuring
// template literals

// Old JavaScript
function combineString(a, b, c, d) {
  return "My Name is " + a + " and my age is " + b + "Marks" + c + d;
}

// New JavaScript with Template Literals
const combineStr = (a, b, c, d) =>
  `My name is ${a} and my age is ${b}. My marks are ${c + d}`;
//tab key on leftside
// backticks

console.log(combineString("Jawad", "27"));
console.log(combineStr("Jawad", "27", 100, 50));
