const display = document.querySelector('.display')
const dislikeBtn = document.querySelector('.dislike')
const likeBtn = document.querySelector('.like')
const showBtn = document.querySelector('.showQuotes')
const savedQuotesDisplay = document.querySelector('.localStorageDisplay')
const statusDisplay = document.querySelector('.status')
const clearBtn = document.querySelector('.clearQuotes')

function fetchQuote() {
    fetch("https://api.quotable.io/random?tags=&author=")
            .then((response) => response.json())
            .then((quote) => display.innerHTML = `${quote.content} - ${quote.author}`);
}
fetchQuote()


dislikeBtn.addEventListener('click', ()=> {
    fetchQuote()
    statusDisplay.innerHTML = ""
    // location.reload()
})

likeBtn.addEventListener('click', () => {
  const quotes = JSON.parse(localStorage.getItem("quotes") || "[]")
  currentQuote = display.textContent

  if (currentQuote) {
    quotes.push(currentQuote)
    localStorage.setItem("quotes", JSON.stringify(quotes))
    fetchQuote()
    // statusDisplay.innerHTML = 'Quote saved succesfully on local Storage.'
   } else {
        statusDisplay.innerHTML = 'Error trying to save quote.';
   }
});

showBtn.addEventListener('click', () => {
    const quotes = JSON.parse(localStorage.getItem("quotes") || "[]")
    if (quotes.length > 0) {
        savedQuotesDisplay.innerHTML = quotes.map(q => `<p>${q}</p>`).join("")
    } else {
        savedQuotesDisplay.innerHTML = 'There is no quotes to show.'
    }
}) 

clearBtn.addEventListener('click', () => {
    localStorage.removeItem("quotes")
    savedQuotesDisplay.innerHTML =  'There is no quotes to show.';
})

// function statusQuotes(quotes){
//     if (quotes.length >= 10) {
//         statusDisplay.innerHTML = 'Sorry, you can only like a number of 10 quotes.'
//     }
// }

// statusQuotes()