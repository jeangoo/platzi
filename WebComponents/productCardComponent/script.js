class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <article>
    <aside>
    <img src='hero.png' />
    </aside>
    <div class="info-aside">
    <h2>Coffee</h2>
    <div class="info-container">
    <p>loeem lloqpjrqjrqjhfioljqofjnqfkqhjf ioqfjqiofhjqiohf qoihfqhfqffhjpqfq fq fihqfh qfq fqh f iqfhqf</p>
    <button>Order now</button>
    </div>
    </div>
    </article>
    ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>

    article {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 400px;
    width: 900px;
    height: 600px;
    border-radius: 6px;
    overflow: hidden;
    }

    img {
    width: 100%;
    height: auto;
    mask-image: linear-gradient(black 65%, transparent 98%);
    }

    aside {
    background: #895129;
    display: grid;
    place-items: center;
    }

    .info-aside {
    background: white;
    padding: 1rem;
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

customElements.define("product-card", myElement);
