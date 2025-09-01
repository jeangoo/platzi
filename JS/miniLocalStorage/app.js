const URL = "https://official-joke-api.appspot.com/random_joke";
const dataDisplay = document.querySelector(".display");
const nextJokeBtn = document.getElementById("nextBtn");
const saveJokeBtn = document.getElementById("saveBtn");
const showJokesBtn = document.getElementById("showBtn");
const showedJokesDisplay = document.querySelector(".showedJokes");
const deleteJokesBtn = document.getElementById("deleteBtn");
const typeContainer = document.querySelector(".type");

function fetchData() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const { type, setup, punchline } = data;
      // (
      dataDisplay.innerHTML = `
        <p>${setup}</p>
        <p>${punchline}</p>
        `;

      typeContainer.innerHTML = `
        <span>${type}</span>
        `;
      // );
    });
}

fetchData();

nextJokeBtn.addEventListener("click", () => {
  fetchData();
  showedJokesDisplay.innerHTML = ``;
});

saveJokeBtn.addEventListener("click", () => {
  const jokes = JSON.parse(localStorage.getItem("jokes") || "[]");
  currentJoke = dataDisplay.textContent;
  if (currentJoke) {
    jokes.push(currentJoke);
    localStorage.setItem("jokes", JSON.stringify(jokes));
    fetchData();
    showedJokesDisplay.innerHTML = ``;
  } else {
    showedJokesDisplay.innerHTML = `<p class="errorMsg">There is no jokes to save right now.</p>`;
  }
});

showJokesBtn.addEventListener("click", () => {
  const jokes = JSON.parse(localStorage.getItem("jokes") || "[]");
  if (jokes.length > 0) {
    jokes.forEach((joke) => {
      showedJokesDisplay.innerHTML = jokes
        .map((j) => `<p>${j}</p><br>`)
        .join("");
    });
  } else {
    showedJokesDisplay.innerHTML = `<p class="errorMsg">There is no jokes to show right now.</p>`;
  }
});

deleteJokesBtn.addEventListener("click", () => {
  localStorage.removeItem("jokes");
  showedJokesDisplay.innerHTML = "";
});
