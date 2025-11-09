class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["title", "subtitle", "img"];
  }
  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === "title") {
      this.title = newValue;
    }
    if (attribute === "subtitle") {
      this.subtitle = newValue;
    }
    if (attribute == "img") {
      this.img = newValue;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
      <h2>${this.title}</h2>
      <div>
      <p>${this.subtitle}</p>
      <img src=${this.img} alt="Meme image" />
      </div>
    </section>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>

    div {
    width: 200px;
    height: 200px;
    }

    img {
    width: auto;
    height: 100%;
    }
    
    </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);