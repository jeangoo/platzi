class myElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hello world!");
  }
  connectedCallback() {
    console.log("Hello DOM!");
  }
  disconnectedCallback() {
    console.log("Goodbye DOM!");
  }
}

customElements.define("my-element", myElement);

document.querySelector("my-element").remove();
