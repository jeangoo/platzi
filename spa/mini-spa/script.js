const API_URL = "https://jsonplaceholder.typicode.com/users";
const $data = document.getElementById("data");

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  for (let row of data) {
    $data.innerHTML += `<tr>
    <td>${row.id}</td>
    <td>${row.name}</td>
    <td>${row.username}</td>
    <td>${row.email}</td>
     <td>
          <button onClick="seeDetails('${row.id}', '${row.name}', '${row.username}', '${row.email}')">
            Ver más
          </button>
        </td>
    </tr>`;
  }
};

getData();

function seeDetails(id, name, username, email) {
  const $modal = document.getElementById("modal");
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  $modal.style.display = "block";
  $modal.innerHTML = `
  <div class="modal-header">
  <span>#${id}</span>
  <span onClick="closeModal()">X</span>
  </div>
  <div class="info">
  <h2>${name}</h2>
  <h3>${username}</h3>
  <p>${email}</p>
  </div>
  `;
}

function closeModal() {
  const $modal = document.getElementById("modal");
  $modal.style.display = "none";
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}