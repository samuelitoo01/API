class AppLayout extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <main>
        <slot></slot>
      </main>
    `
  }
}

customElements.define('app-layout', AppLayout)
