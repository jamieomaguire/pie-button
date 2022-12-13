var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, unsafeCSS } from 'lit';
import { styles } from './generated/style';
import { customElement, property } from 'lit/decorators.js';
const styleString = styles();
let PieButton = class PieButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        /**
         * The type of button to show
         */
        this.type = "Primary";
        /**
         * The size of button to show
         */
        this.size = "Large";
        /**
         * Should the button be disabled
         */
        this.disabled = false;
    }
    render() {
        return html `
      <button
        @click=${this._onClick}
        ?disabled=${this.disabled}
        class="o-btn o-btn--${this.type} o-btn--size${this.size}">
        <slot></slot>
        Click Count: ${this.count}
      </button>`;
    }
    _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }
};
PieButton.styles = css `${unsafeCSS(styleString)}`;
__decorate([
    property({ type: Number })
], PieButton.prototype, "count", void 0);
__decorate([
    property({ type: String })
], PieButton.prototype, "type", void 0);
__decorate([
    property({ type: String })
], PieButton.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], PieButton.prototype, "disabled", void 0);
PieButton = __decorate([
    customElement('pie-button')
], PieButton);
export { PieButton };
//# sourceMappingURL=pie-button.js.map