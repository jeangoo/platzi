function showAlert() {
  window.addEventListener('click', (
    alert("hola")
  ))
}

const parent = document.getElementById("menu");
console.log(parent);

if (parent) {
  const children = parent.children;
  console.log('There is a children element', children);

} else {
  console.log('There is no children element')
}   

const firstChild = parent.firstElementChild;

console.log(firstChild);

const lastChild = parent.lastElementChild;
console.log(lastChild);

const nextSibling = firstChild.nextElementSibling;
console.log(nextSibling);

console.log("prueba git push")

const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
const display = document.getElementById('datafetched')

function fetchData() {
  fetch(URL)
  .then(res => res.json())
  .then(data =>
  display.innerHTML = `
  <h1>${data.name}</h1>
  <img src=${data.sprites.front_default} alt='photo'>
  `
)};


// console.log('warp')
// console.log('is')
// console.log('error')
// console.log('new')

const box = document.getElementById('box')
box.addEventListener('mouseover',  () => {
  box.classList.toggle('lightblue')
});
// const toggleBtn = document.getElementById('btn')

// function toggleVisibility() {
//     box.classList.toggle("invisible");
// }

// toggleBtn.addEventListener('click', toggleVisibility);


const button = document.getElementById('btn')

button.addEventListener('click', () => {
  box.classList.toggle('invisible');              
});

const ul = document.querySelector("#list")
const addBtn = document.getElementById("addBtn")
listOfItems = []

addBtn.addEventListener("click", (
  function addItem() {
  const item = prompt("enter the item do you want to add: ")
    if (item !== null && item.trim() !== "") {
      listOfItems.push(item)
      ul.innerHTML += `
       <li>${item}</li>
      `
      } else {
        alert("Item cannot be a empty string.")
      }
}
))

const form = document.getElementById("form-id")

form.addEventListener("submit", (event) => {

  event.preventDefault()
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  if (!email.includes("@")) {
    alert("Email must be a valid email address.")
    return
  }
  if (name.length < 4) {
    alert("Name must be at least 4 characters long.")
    return
  }
  alert("Form submitted succesfully.")
  console.log(`Name: ${name}, Email: ${email}`);

  const formData = {
    name: name,
    email: email
  }

  console.log(formData)
});

const person = {
  name: "Jean",
  age: 30,
  coords: {
    lat: 0,
    lng: -10,
  }
}

localStorage.setItem("person", JSON.stringify(person))

const returnPerson = JSON.parse(localStorage.getItem("person"))
console.log(returnPerson)