const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageArray.forEach((element) => {
  const image = document.createElement("img");
  image.src = `/src/imgs/background_image_${element}.jpg`;
  image.alt = `this is image ${element}`;
  image.classList.add("galleryImage");
  image.addEventListener("click", () => {
    popup.style.transform = "translateY(0)";
    selectedImage.src = `/src/imgs/background_image_${element}.jpg`;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = "translateY(-100%)";
  selectedImage.src = "";
  selectedImage.alt = "";
});
