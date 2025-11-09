class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
      <h2><slot name="title"> </slot></h2>
      <div>
      <p><slot name="subtitle"> </slot></p>
      <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg" alt="this is fine meme" />
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
