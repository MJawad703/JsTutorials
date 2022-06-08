const grid = document.getElementById("grid");

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const clientName = document.createElement("h2");
        const clientEmail = document.createElement("h3");
        clientName.classList.add("client-name");
        clientEmail.classList.add("client-email");
        image.classList.add("card-img");
        image.src = `https://robohash.org/${element.id}?set=set2&size=180x180`;
        card.classList.add("card");
        clientName.innerText = element.name;
        clientEmail.innerHTML = element.email;
        card.append(image, clientName, clientEmail);
        grid.appendChild(card);
      });
    });
});
