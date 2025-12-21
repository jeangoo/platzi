import "./style.css";
import image from "../public/image.jpg";
import styles from "./styles.module.css";
import data from "./data.json";
import add from "./main.ts";
import svg from "./arrow-down.js";

console.log(add(4, 7));

const modules = import.meta.glob("../modules/*.js");

for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${image}" class="logo" alt="image" />
    </a>
    <h1>Hello Vite!</h1>
    <p>
      See the json data exported below <span>${svg}</span>
    </p>
    </div>
    <pre>${JSON.stringify(data)}</pre>
`;

document.querySelector("img").className = styles.img;
document.querySelector("p").className = styles.arrow;
