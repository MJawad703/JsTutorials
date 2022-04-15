// DOMContentLoaded;

window.addEventListener("DOMContentLoaded", () => {
  const find = document.getElementById("find");
  const replace = document.getElementById("replace");
  const textarea = document.getElementById("textarea");
  const button = document.getElementById("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let findValue = find.value;
    let replaceValue = replace.value;
    // Converting textarea.value into an Array
    let textareaValue = textarea.value.split(" ");

    for (let a = 0; a <= textareaValue.length; a++) {
      if (textareaValue[a] === findValue) {
        textareaValue[a] = replaceValue;
      }
    }

    // Converting textareaValue into a string from an array.
    textareaValue = textareaValue.join(" ");
    // console.log(textareaValue);
    textarea.value = textareaValue;
    // while (textarea.value.indexOf(find.value) != -1) {
    //   textarea.value = textarea.value.replace(find.value, replace.value);
    // }
    // console.log(newText);
  });
});

// let str = "I am Jawad Jawad";
//if it finds a value then that value will be greater than -1
// if it doesn't find value then that will be -1.
// console.log(str.replace("Jawad", "Suhaib"));
