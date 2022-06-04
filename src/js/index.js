// const gallery = document.getElementById("gallery");
// const popup = document.getElementById("popup");
// const selectedImage = document.getElementById("selectedImage");
// const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const selectedIndex = null;
const body = document.body;
// window.addEventListener("DOMContentLoaded", () => {
//   fetch(
//     `https://api.unsplash.com/search/photos/?query="kasdjwlkajsdjiasldkj&per_page=10&client_id=HX5lV7E-mir07Ci0i2ui1RzM4u5TEThIN9090FvSsNo`
//   ).then((res) => console.log(res));
// });

// imageArray.forEach((element) => {
//   const image = document.createElement("img");
//   image.src = `/src/imgs/background_image_${element}.jpg`;
//   image.alt = `this is image ${element}`;
//   image.classList.add("galleryImage");
//   image.addEventListener("click", () => {
//     popup.style.transform = "translateY(0)";
//     selectedImage.src = `/src/imgs/background_image_${element}.jpg`;
//   });
//   gallery.appendChild(image);
// });

// popup.addEventListener("click", () => {
//   popup.style.transform = "translateY(-100%)";
//   selectedImage.src = "";
//   selectedImage.alt = "";
// });

// const promise = new Promise((resolve, reject) => {
//   const a = 0;
//   if (a === 10) {
//     resolve("This is resolve now");
//   } else {
//     reject("This is rejected");
//   }
// });

// promise
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

// console.log(promise);
let array = [];
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    array = [...data];
    console.log(array.length);
    array.length > 1 &&
      array.forEach((element) => {
        const box = document.createElement("div");
        box.innerHTML = element.name + element.email;
        body.appendChild(box);
      });
  })
  .catch((error) => console.log(error.message));
