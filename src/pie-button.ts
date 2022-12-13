import { LitElement, css, html, unsafeCSS } from 'lit';
import { styles } from './generated/style';
import { customElement, property } from 'lit/decorators.js';

const styleString = styles();

@customElement('pie-button')
export class PieButton extends LitElement {
    static override styles = css`${unsafeCSS(styleString)}`;
  
    /**
     * The number of times the button has been clicked.
     */
    @property({type: Number})
    count = 0;

    /**
     * The type of button to show
     */
    @property({type: String})
    type = "Primary"

    /**
     * The size of button to show
     */
    @property({type: String})
    size = "Large"

    /**
     * Should the button be disabled
     */
    @property({type: Boolean})
    disabled = false
  
    override render() {
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
}

declare global {
  interface HTMLElementTagNameMap {
    'pie-button': PieButton;
  }
}