import { LitElement } from 'lit';
export declare class PieButton extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    /**
     * The type of button to show
     */
    type: string;
    /**
     * The size of button to show
     */
    size: string;
    /**
     * Should the button be disabled
     */
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-button': PieButton;
    }
}
//# sourceMappingURL=pie-button.d.ts.map