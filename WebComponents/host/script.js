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
        display: inline-block;
        width: 100%;
        min-width: 300px;
        max-width: 450px;
        font-size: 20px;
        background: #4f4f4f;
        color: white;
      }

      :host(.blue) {
      background: #09f;
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
