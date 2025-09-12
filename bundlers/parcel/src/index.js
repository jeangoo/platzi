const $app = document.getElementById("app");
const $button = document.querySelector("button");

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

// export function counter() {
//   const $strong = document.querySelector("strong");
//   const $addButton = document.getElementById("add");
//   const $subButton = document.getElementById("sub");
//   let counter = 0;
//   $strong.innerHTML = counter;
//   $addButton.addEventListener("click", () => {
//     counter += 1;
//     $strong.innerHTML = counter;
//   });
//   $subButton.addEventListener("click", () => {
//     counter -= 1;
//     $strong.innerHTML = counter;
//   });
// }

export default greetParcel;

export const characterData = {
  id: 1,
  name: "Arthur Morgan",
  image: ".png",
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
