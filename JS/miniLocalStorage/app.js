const URL = 'https://official-joke-api.appspot.com/random_joke'
const dataDisplay = document.querySelector(".display")
const nextJokeBtn = document.getElementById('nextBtn')
const saveJokeBtn = document.getElementById('saveBtn')
const showJokesBtn = document.getElementById('showBtn')
const showedJokesDisplay = document.querySelector('.showedJokes')
const deleteJokesBtn = document.getElementById('deleteBtn')

function fetchData() {
    fetch(URL)
    .then(response => response.json())
    .then(data => dataDisplay.innerHTML = `
        <p>${data.setup}</p>
        <p>${data.punchline}</p>
        `)
}

fetchData()

nextJokeBtn.addEventListener('click', () => {
    fetchData()
})

saveJokeBtn.addEventListener('click', () => {
    const jokes = JSON.parse(localStorage.getItem("jokes") || "[]")
    currentJoke = dataDisplay.textContent
    if (currentJoke) {
        jokes.push(currentJoke)
        localStorage.setItem("jokes", JSON.stringify(jokes))
        fetchData()
    } else {
        alert('Error')
    }
})

showJokesBtn.addEventListener('click', () => {
    const jokes = JSON.parse(localStorage.getItem("jokes") || "[]")
    if (jokes.length > 0) {
    jokes.forEach(joke => {
        showedJokesDisplay.innerHTML = jokes.map((j) => `<p>${j}</p><br>`).join("")
    })
    } else {
        alert("Error")
    }
})

deleteJokesBtn.addEventListener('click', () => {
    localStorage.removeItem("jokes")
})