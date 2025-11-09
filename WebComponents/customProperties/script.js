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
      </div>
    </section>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>

    :host {

    --primary-color: yellow;
    --secondary-color: green;
    --heading-primary: 1.3rem;
    --heading-secondary: 1rem'

    display: inline-block;
    width: 100%;
    min-width: 300px;
    max-width: 450px;
    }

    section {
    background: var(--primary-color);
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
