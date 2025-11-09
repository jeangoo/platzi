class myElement extends HTMLElement {
  constructor() {
    super();
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
      <h2>HELLO WORLD!</h2>
      <div>
      <p>hello world!</p>
      </div>
    </section>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>

    body {
    display: grid;
    place-content: center;
    min-height: 100vh;
    }
    
    </style>
    `;
  }
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);
