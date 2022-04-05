const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const check = document.querySelector("#check");
const addAll = document.querySelector("#addAll");
const removeAll = document.querySelector("#removeAll");
const paragraph = document.querySelector("#paragraph");

add.addEventListener("click", function () {
  paragraph.classList.add("styles");
});

remove.addEventListener("click", function () {
  paragraph.classList.remove("styles");
});

check.addEventListener("click", function () {
  const isPresent = paragraph.classList.contains("styles");
  // console.log(isPresent);
  paragraph.innerHTML = isPresent;
});
