const $app = document.getElementById("app");
const $list = document.querySelector(".vowels-counter-list");

const greetParcel = () => {
  return `<h1>Hello parcel!</h1>`;
};

export function farewellParcel() {
  return `<p>Goodbye parcel :(</p>`;
}

export const delayParcel = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve(`<small>Parcel ( 2s later )</small>`), 2000)
      : reject(`<small>Parcel ( error )</small>`);
  });
};

export async function returnDelayParcel() {
  const response = await delayParcel();
  $app.innerHTML += response;
}

export function counter() {
  const $strong = document.querySelector("strong");
  const $addButton = document.getElementById("add");
  const $subButton = document.getElementById("sub");
  let counter = 0;
  $strong.innerHTML = counter;
  $addButton.addEventListener("click", () => {
    counter += 1;
    $strong.innerHTML = counter;
  });
  $subButton.addEventListener("click", () => {
    counter -= 1;
    $strong.innerHTML = counter;
  });
}

export default greetParcel;

export const characterData = {
  id: 1,
  name: "Arthur Morgan",
  image:
    "https://www.giantbomb.com/a/uploads/scale_small/5/56742/3061198-arthur%20portrait%20transparent.png",
  gender: "Masculine",
  age: 36,
  gang: "Van der Linde",
  is_alive: false,
  money: 13_574,
  friends: [
    "John Marston",
    "Charles Smith",
    "Sadie Adler",
    "Lenny Summers",
    "Hosea Matthews",
  ],
  graveLocation: "Mount Shann",
  weight: "Underweight",
  horses: ["Andalusian", "Turkoman", "Kentucky Saddler"],
  atributtes: {
    health: 100,
    stamina: 100,
    deadeye: 100,
  },
};

export function vowelsCounter(text) {
  const cleanText = text.toLowerCase().trim();
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let vowel of cleanText) {
    if (
      vowel === "a" ||
      vowel === "e" ||
      vowel === "i" ||
      vowel === "o" ||
      vowel === "u"
    ) {
      vowels[vowel] += 1;
    }
  }

  return vowels;
}

const innerVowelsCounter = (text) => {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (const vowel of text) {
    if (vowel in vowels) {
      vowels[vowel] += 1;
    }
  }

  $list.innerHTML = `<li>A: ${vowels.a}</li>
  <li>E: ${vowels.e}</li>
  <li>I: ${vowels.i}</li>
  <li>O: ${vowels.o}</li>
  <li>U: ${vowels.u}</li>
  `;
};

export const inputVowelsCounter = () => {
  const $input = document.querySelector("input");
  $input.addEventListener("keydown", (event) => {
    const inputValue = $input.value;
    if (event.key === "Enter" && inputValue.trim() !== "") {
      innerVowelsCounter(inputValue);
      $input.value = "";
    }
  });
};

function rpsGameLogic(choice) {
  const machineChoiceResult = document.getElementById("machineChoice");
  const userChoiceResult = document.getElementById("userChoice");
  const gameResult = document.getElementById("result");
  const choices = ["rock", "paper", "scissors"];
  const machineChoice = choices[Math.floor(Math.random() * 3)];

  machineChoiceResult.innerHTML = `machine choice: ${machineChoice}`;
  userChoiceResult.innerHTML = `your choice: ${choice}`;

  if (choice === machineChoice) {
    gameResult.innerHTML = `game result: tie!`;
  } else if (choice === "rock" && machineChoice === "scissors") {
    gameResult.innerHTML = `game result: you win!`;
  } else if (choice === "scissors" && machineChoice === "paper") {
    gameResult.innerHTML = `game result: you win!`;
  } else if (choice === "paper" && machineChoice === "rock") {
    gameResult.innerHTML = `game result: you win!`;
  } else if (choice === "rock" && machineChoice === "") {
    gameResult.innerHTML = `game result: you win!`;
  } else {
    gameResult.innerHTML = `game result: you lose!`;
  }
}

export const rpsMain = () => {
  const userChoiceInput = document.getElementById("choiceInput");
  const choices = ["Rock", "Paper", "Scissors"];

  userChoiceInput.addEventListener("keydown", (event) => {
    const userChoice = userChoiceInput.value.toLowerCase();
    if (
      (event.key === "Enter" && userChoice === choices[0]) ||
      choices[1] ||
      (choices[2] && userChoice.trim() !== "")
    ) {
      rpsGameLogic(userChoice);
      userChoiceInput.value = "";
    } else {
      alert("Enter a valid choice.");
    }
  });
};
