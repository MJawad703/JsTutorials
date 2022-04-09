const add = document.getElementById("add");
const reset = document.getElementById("reset");
const dec = document.getElementById("dec");
const counter = document.getElementById("counter");

add.addEventListener("click", () => {
  localCounter = parseFloat(counter.innerText);
  localCounter += 1;
  counter.innerText = localCounter;
});

dec.addEventListener("click", () => {
  localCounter = parseFloat(counter.innerText);
  localCounter -= 1;
  counter.innerText = localCounter;
});

reset.addEventListener("click", () => {
  let initialState = 0;
  counter.innerText = initialState;
});
