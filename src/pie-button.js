import { LitElement, css, html, unsafeCSS } from 'lit';
import { styles } from './generated/style';

const styleString = styles();

export class PieButton extends LitElement {
    static get styles() {
      return css`${unsafeCSS(styleString)}`;
    }
  
    static get properties() {
      return {
        /**
         * The name to say "Hello" to.
         * @type {string}
         */
        name: {type: String},
  
        /**
         * The number of times the button has been clicked.
         * @type {number}
         */
        count: {type: Number},

        type: {type: String}
      };
    }
  
    constructor() {
      super();
      this.name = 'World';
      this.count = 0;
    }
  
    render() {
      return html`<button @click=${this._onClick} class="o-btn o-btn--${this.type}">
        <slot></slot>
        Click Count: ${this.count}
      </button>`
    }
  
    _onClick() {
      this.count++;
      this.dispatchEvent(new CustomEvent('count-changed'));
    }
  
    /**
     * Formats a greeting
     * @param name {string} The name to say "Hello" to
     * @returns {string} A greeting directed at `name`
     */
    sayHello(name) {
      return `Hello, ${name}`;
    }
  }

customElements.define('pie-button', PieButton);
