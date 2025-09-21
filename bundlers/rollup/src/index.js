const $body = document.querySelector("body");
import "./styles/styles.css";
const API_URL = "https://dummyjson.com/users";

const main = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const output = data.users
    .map((user) => {
      const { firstName, lastName, maidenName, email, image } = user;
      return `
  <article class="user-card">
  <img src=${image} alt=${firstName} ${lastName}>
  <span>${firstName} ${lastName} ${maidenName}</span>
  <p>${email}</p> 
  </article> 
  `;
    })
    .join("");
  const newItem = document.createElement("section");
  newItem.classList.add("user-cards-section");
  newItem.innerHTML = output;

  $body.appendChild(newItem);
};

main();
