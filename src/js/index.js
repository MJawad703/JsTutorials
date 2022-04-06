const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const check = document.querySelector("#check");
const addAll = document.querySelector("#addAll");
const toggle = document.querySelector("#toggle");
const removeAll = document.querySelector("#removeAll");
const paragraph = document.querySelector("#paragraph");

add.addEventListener("click", function () {
  paragraph.classList.add("styles");
});

remove.addEventListener("click", function () {
  // paragraph.setAttribute("styles", "");
  paragraph.classList.remove("styles");
});

check.addEventListener("click", function () {
  const isPresent = paragraph.classList.contains("styles");
  // console.log(isPresent);
  paragraph.innerHTML = isPresent;
});

toggle.addEventListener("click", function () {
  paragraph.classList.toggle("styles");
});

addAll.addEventListener("click", function () {
  paragraph.classList.add("styles", "paragraph", "abc");
});

removeAll.addEventListener("click", function () {
  const classes = paragraph.classList;
  paragraph.classList.remove("styles", "paragraph", "abc");
});

// Arrow Function

function addNumber(a, b) {
  return a + b;
}

const addNumberArrow = (a, b) => a + b;

console.log(addNumber(12, 12));
console.log(addNumberArrow(12, 12));

const person = {
  population: "123",
  country: "string",
};
