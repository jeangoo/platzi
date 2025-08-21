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


console.log('warp')
console.log('is')
console.log('error')
console.log('new')

// const box = document.getElementById('box')
// const toggleBtn = document.getElementById('btn')

// function toggleVisibility() {
//     box.classList.toggle("invisible");
// }

// toggleBtn.addEventListener('click', toggleVisibility);


const button = document.getElementById('btn')

button.addEventListener('click', () => {
  box.classList.toggle('invisible');              
});


const itemsList = document.querySelector("article")

listOfItems = []
  while (listOfItems.length < 3) {
    const item = prompt("enter the item do you want to add: ")
    if (item !== null && item.trim() !== "") {
      listOfItems.push(item)
    }
  }

for(item of listOfItems) {
  itemsList.innerHTML = `
  <li>${item}</li>
  `
}