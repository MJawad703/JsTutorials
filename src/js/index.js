const box = document.getElementById("box");
const btn = document.getElementById("btn");
let isLogin = true;

box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "red";
box.style.margin = "40px";

if (isLogin) {
  box.style.display = "block";
} else {
  box.style.display = "none";
}
