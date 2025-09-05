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
      <span class="font-bold text-stone-800 text-2xl text-pretty">${title}</span>
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
    items.push(currentItem);
    fetchData();
    itemsNumberCart.textContent = `${items.length}`;
    itemCount.textContent = `( ${items.length} item )`;
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    alert("error");
  }
});

checkoutBtn.addEventListener("click", () => {
  checkoutModal.style.display = "block";
  checkoutModal.style.zIndex = "100";
  checkoutModal.style.position = "absolute";
  checkoutModal.style.margin = "0 auto";
});

closeModalBtn.addEventListener("click", () => {
  checkoutModal.style.display = "none";
});
