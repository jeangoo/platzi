import greetParcel from "./index";
import { farewellParcel } from "./index";
import { returnDelayParcel } from "./index";
import { characterData } from "./index";
import { vowelsCounter } from "./index";
import { counter } from "./index";
import { inputVowelsCounter } from "./index";
import { rpsMain } from "./index";

const $app = document.getElementById("app");
const $list = document.querySelector("ul");

$app.innerHTML = greetParcel();
$app.innerHTML += farewellParcel();
counter();
returnDelayParcel();

const {
  name,
  image,
  age,
  gang,
  money,
  friends,
  atributtes: { health, stamina, deadeye },
} = characterData;
console.log(name, image, age, gang, money, health, stamina, deadeye);

friends.forEach((friend) => {
  $list.innerHTML += `<li>${friend}</li>`;
});

const text =
  vowelsCounter(`Parcel's JavaScript, CSS, HTML, and SVG compilers are written in Rust for maximum performance. These are 10-100x faster than other JavaScript-based tools!

Parcel's JavaScript compiler is built on SWC, which handles transpiling JavaScript, JSX, and TypeScript. On top of SWC, Parcel implements dependency collection, bundling, scope hoisting, tree shaking, Node emulation, hot reloading, and more.

Parcel's CSS transformer and minifier is built in Rust on top of the browser-grade CSS parser used in Firefox. It's over 100x faster than other JavaScript-based transformers and minifiers.`);
console.log(text);

inputVowelsCounter();

rpsMain();
