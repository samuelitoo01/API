class AppLayout extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <header>...</header>
      <main>
        <slot></slot>
      </main>
      <footer>...</footer>
    `
  }
}

customElements.define('app-layout', AppLayout)