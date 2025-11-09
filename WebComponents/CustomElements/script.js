const template = document.createElement("div");
template.innerHTML = `
<style>

.primary-text {
font-size: 3rem;
}

.secondary-text {
font-size: 1.5rem;
}

</style>

<p class="secondary-text">Goobye world!</p>
<p class="secondary-text">Hello again world!</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();
    this.p = document.createElement("p"); 
  }
  connectedCallback() {
    this.p.textContent = "Hello world!";
    this.p.classList = "primary-text";
    this.appendChild(this.p);
    this.appendChild(template); 
  }
}

customElements.define("my-element", myElement);
