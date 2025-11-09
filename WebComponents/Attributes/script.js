class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.title = this.getAttribute('title')
    this.subtitle = this.getAttribute('subtitle')
    this.img = this.getAttribute('img')
    
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
