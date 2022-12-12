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
         * The number of times the button has been clicked.
         * @type {number}
         */
        count: {type: Number},

        /**
         * The type of button to show
         * @type {string}
         */
        type: {type: String},

        /**
         * The size of button to show
         * @type {string}
         */
        size: {type: String},

        /**
         * Should the button be disabled
         * @type {boolean}
         */
        disabled: {type: Boolean}
      };
    }
  
    constructor() {
      super();
      this.count = 0;
    }
  
    render() {
      return html`
      <button
        @click=${this._onClick}
        ?disabled=${this.disabled}
        class="o-btn o-btn--${this.type} o-btn--size${this.size}">
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
