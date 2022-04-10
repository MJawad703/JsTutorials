const add = document.getElementById("add");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");
const counter = document.getElementById("counter");
const body = document.getElementById("body");

const checkClass = (number, element) => {
  if (number >= 0) {
    element.classList.add("success");
  } else {
    element.classList.remove("success");
    element.classList.add("danger");
  }
};

add.addEventListener("click", () => {
  localCounter = parseFloat(counter.innerText);
  localCounter += 1;
  counter.innerText = localCounter;
  checkClass(localCounter, body);
});

dec.addEventListener("click", () => {
  localCounter = parseFloat(counter.innerText);
  localCounter -= 1;
  counter.innerText = localCounter;
  checkClass(localCounter, body);
});

reset.addEventListener("click", () => {
  let initialState = 0;
  counter.innerText = initialState;
});
