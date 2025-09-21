const $image = document.querySelector('img')
const $quotes = document.getElementById('quotes')

$image.src = '../assets/photo.avif'

function fetchQuote() {
  fetch("https://api.quotable.io/random?tags=&author=")
    .then((response) => response.json())
    .then((quote) => {
      const { content, author } = quote;
      $quotes.innerHTML = `${content} - ${author}`;
    });
}
fetchQuote();
