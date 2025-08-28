const KEY = "e1603f0b236c7c2499f1df47f1739cd2";
const mainDisplay = document.querySelector(".main-details");
const sideDisplay = document.querySelector(".side-details");
const getCityInput = document.getElementById("city-input");
const toggleButton = document.querySelector("button");
const mainContainer = document.querySelector(".main-container");
const sideContainer = document.querySelector(".side-container");

getCityInput.addEventListener("keydown", (event) => {
  const CITY_NAME = getCityInput.value;
  if (event.key === "Enter") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        mainDisplay.innerHTML = `
            <div class="city-div">
            <span><svg class="svg" fill="#ffffff" viewBox="0 0 32 32" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg></span>   
            <span>${data.name}</span>
            </div>
            <h1 class="temperature">${data.main["temp"]}</h1>
            <p>${data.weather[0].description}</p>
    
            `;

        sideContainer.innerHTML = `
            <div class="city-div">
            <span><svg fill="#000000" viewBox="0 0 32 32" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg></span>   
            <span>${data.name}</span>
            </div>
             <h1 class="temperature">${data.main["temp"]}</h1>
             <section class="details">

             <div>
             <p>Pressure</p>
                <h3>${data.main["pressure"]}</h3>
                </div>
                <div>
                <p>Humidity</p>
                <h3>${data.main["humidity"]}</h3>
                </div>
                </section>   
            `;
      })
      .catch((err) => {
        mainDisplay.innerHTML = `<p>Error fetching the data: ${err}</p>`;
      });
  }
});

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
  toggleButton.classList.toggle("dark-toggle-button");
  getCityInput.classList.toggle("dark-input");
});
