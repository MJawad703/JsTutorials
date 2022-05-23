const toggleBtn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hide-or-unhide");
  //   console.log("123");
});
