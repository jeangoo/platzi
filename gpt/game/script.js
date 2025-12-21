let words = [
  {
    word: "addition",
    hint: "The process of adding numbers",
  },
  {
    word: "meeting",
    hint: "Event in which people come together",
  },
  {
    word: "number",
    hint: "Math symbol used for counting",
  },
  {
    word: "exchange",
    hint: "The act of trading",
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting",
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant",
  },
  {
    word: "position",
    hint: "Location of someone or something",
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird",
  },
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation",
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth",
  },
  {
    word: "expansion",
    hint: "The process of increase or grow",
  },
  {
    word: "country",
    hint: "A politically identified region",
  },
  {
    word: "group",
    hint: "A number of objects or persons",
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour",
  },
  {
    word: "store",
    hint: "Large shop where goods are traded",
  },
  {
    word: "field",
    hint: "Area of land for farming activities",
  },
  {
    word: "friend",
    hint: "Person other than a family member",
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items",
  },
  {
    word: "needle",
    hint: "A thin and sharp metal pin",
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge",
  },
  {
    word: "statement",
    hint: "A declaration of something",
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute",
  },
  {
    word: "library",
    hint: "Place containing collection of books",
  },
];

const $word = document.getElementById("word");
const $hint = document.getElementById("hint");
const guess = document.getElementById("guess-input");
const checkBtn = document.getElementById("check");
const refreshBtn = document.getElementById("refresh");
const congratsModal = document.querySelector(".congrats-modal");
const looseModal = document.querySelector(".loose-modal");
const backdrop = document.querySelector(".backdrop");
const advice = document.querySelector(".advice");

function getIndex() {
  return Math.floor(Math.random() * 23);
}

function setContent() {
  index = getIndex();
  let normalWord = words[index].word;
  let sortedWord = normalWord.split("").sort().join("");
  $word.innerHTML = `${sortedWord}`;
  $hint.innerHTML = `${words[index].hint}`;

  refreshBtn.addEventListener("click", () => {
    $word.innerHTML = `${sortedWord}`;
    $hint.innerHTML = `${words[index].hint}`;
  });

  checkBtn.addEventListener("click", () => {
    if (guess.value == normalWord) {
      confetti({
        particleCount: 160, // Number of confetti particles
        spread: 75, // How far off center the confetti can go
        origin: { y: 0.8 }, // Y position (0 is top, 1 is bottom)
      });
      congratsModal.style.display = "block";
      backdrop.style.display = "block";
    } else {
      advice.innerHTML = "Enter a valid word";
    }
  });
  backdrop.addEventListener("click", () => {
    backdrop.style.display = "hidden";
    congratsModal.style.display = "hidden";
  });
}

setContent();

function startCountdown() {
  let time = 30; // Start time in seconds
  const display = document.getElementById("timer-display");

  const countdown = setInterval(() => {
    display.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(countdown); // Stop the timer
      display.textContent = "Timer complete!";
      looseModal.style.display = "block";
      backdrop.style.display = "block";
    }
  }, 1000); // Update every 1000 milliseconds (1 second)
}

startCountdown();
