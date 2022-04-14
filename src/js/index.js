// DOMContentLoaded;

window.addEventListener("DOMContentLoaded", () => {
  const find = document.getElementById("find");
  const replace = document.getElementById("replace");
  const textarea = document.getElementById("textarea");
  const button = document.getElementById("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const findValue = find.value;
    const replaceValue = replace.value;
    const textareaValue = textarea.value;
    while (textareaValue.indexOf(findValue) != -1) {
      textarea.value = textareaValue.replace(findValue, replaceValue);
    }
  });
});

// let str = "I am Jawad";
// console.log(str.indexOf("Jawad"));
