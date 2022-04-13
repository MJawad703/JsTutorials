const button = document.getElementById("button");
const input = document.getElementById("input");
const display = document.getElementById("display");

button.addEventListener("click", (event) => {
  console.log(event);
});

// const onChange = (e) => {
//   if (e.target.value === "Jawad") {
//     display.innerText = e.target.value;
//   } else {
//     alert("Wrong UserName");
//     display.innerText = "";
//   }
// };

input.addEventListener("change", (e) => {
  if (e.target.value === "Jawad") {
    display.innerText = e.target.value;
  } else {
    alert("Wrong UserName");
    display.innerText = "";
  }

  // console.log(e.target.value);
});
