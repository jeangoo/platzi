const dataInfoDisplay = document.getElementById("infoDisplay");
const dataDetailsDisplay = document.getElementById("details");
const addItemToCartBtn = document.getElementById("cartBtn");
const nextItemBtn = document.getElementById("next");
const itemsCart = document.getElementById("cart");
const itemsNumberCart = document.getElementById("cartNumber");
const itemCount = document.querySelector("strong");
const checkoutBtn = document.getElementById("checkout");
const checkoutModal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeBtn");
const totalPrice = document.getElementById("price");
const submitBtn = document.getElementById("submitBtn");
const cardValue = document.getElementById("cardValue");
const personName = document.getElementById("name");
const cardNumber = document.getElementById("cardNumber");
const validThru = document.getElementById("validThru");

const callItemsLength = () => {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  if (items.length > 0) {
    itemsNumberCart.textContent = `${items.length}`;
    itemCount.textContent = ` ( ${items.length} item )`;
  } else {
    itemsNumberCart.textContent = ``;
    itemCount.textContent = ``;
  }
};

callItemsLength();

const fetchData = async () => {
  const index = Math.floor(Math.random() * 21);
  await fetch(`https://fakestoreapi.com/products/${index}`)
    .then((response) => response.json())
    .then((data) => {
      const { image, title, price, description } = data;

      dataInfoDisplay.innerHTML = `
      <img src="${image}" alt="${title}" class="w-full object-cover rounded md:size-50">
      `;

      dataDetailsDisplay.innerHTML = `
      <span class="font-bold text-stone-800 text-2xl text-pretty mt-2">${title}</span>
      <small class="font-black text-xl mt-2">$${price}</small>
      <p class="mt-4 text-stone-500 text-pretty">${description}</p>
        `;
    });
};

fetchData();

nextItemBtn.addEventListener("click", fetchData);

addItemToCartBtn.addEventListener("click", () => {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  const currentItem = {
    title: dataDetailsDisplay.querySelector("span").textContent,
    price: dataDetailsDisplay.querySelector("small").textContent,
    description: dataDetailsDisplay.querySelector("p").textContent,
  };
  if (currentItem) {
    try {
      items.push(currentItem);
      fetchData();
      itemsNumberCart.textContent = `${items.length}`;
      itemCount.textContent = `( ${items.length} item )`;
      localStorage.setItem("items", JSON.stringify(items));
    } catch (err) {
      alert(`error: ${err}`);
    }
  }
});

checkoutBtn.addEventListener("click", () => {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  let counter = 0;
  for (const item of items) {
    counter += parseFloat(item.price.replace("$", ""));
  }

  totalPrice.innerHTML = `
  <span class="text-xl">Total: <strong class="font-black text-2xl"><span class="font-black text-2xl text-emerald-500 mr-0.5">$</span>${counter.toFixed(
    2
  )}</strong></span>
  `;

  checkoutModal.style.display = "block";
  checkoutModal.style.zIndex = "100";
  checkoutModal.style.position = "absolute";
  checkoutModal.style.margin = "0 auto";
});

closeModalBtn.addEventListener("click", () => {
  checkoutModal.style.display = "none";
});

function error(message) {
  alert("Error " + message);
}

function success() {
  alert("All fields are valid");
  personName.value = "";
  cardNumber.value = "";
  validThru.value = "";
  cardValue.value = "";
}

const formAuthenticate = () => {
  const personNamePattern = /^[a-zA-Z\s-]+$/;
  const cardNumberPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const validThruPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cardValuePattern = /^\d{3}$/;

  if (!personNamePattern.test(personName.value.trim())) {
    return error("Invalid name");
  }
  if (!cardNumberPattern.test(cardNumber.value.trim())) {
    return error("Invalid card number");
  }
  if (!validThruPattern.test(validThru.value.trim())) {
    return error("Invalid expiry date (MM/YY)");
  }
  if (!cardValuePattern.test(cardValue.value.trim())) {
    return error("Invalid CVV");
  }

  success();
};

submitBtn.addEventListener("click", formAuthenticate);
