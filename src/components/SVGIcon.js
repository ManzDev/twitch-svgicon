class SVGIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        display: inline-flex;
        width: 150px;
        height: 150px;
      }
    `;
  }

  connectedCallback() {
    this.icon = this.getAttribute("icon") ?? "wifi";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${SVGIcon.styles}</style>
    <svg role="img">
      <use xlink:href="/iconset.svg#${this.icon}"></use>
    </svg>`;
  }
}

customElements.define("svg-icon", SVGIcon);
