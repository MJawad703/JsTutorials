export const checkClass = (number, element) => {
  if (number >= 0) {
    element.classList.add("success");
  } else {
    element.classList.remove("success");
    element.classList.add("danger");
  }
};
