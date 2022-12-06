import { LitElement, css, html } from 'lit';

export class PieButton extends LitElement {
    static properties = {

    };

    // Scoped styles
    static styles = css`
        :host {
            color: red;
        }
    `;

    constructor () {
        super();
        // Declare reactive properties here

    }

    render () {
        return html`<p>Hello world!</p>`;
    }
};

customElements.define('pie-button', PieButton);
