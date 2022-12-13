import { PieButton } from '../../compiled/pie-button';

import { fixture, assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('pie-button', () => {
  it('is defined', () => {
    const el = document.createElement('pie-button');
    assert.instanceOf(el, PieButton);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<pie-button>Hello world</pie-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button class="o-btn o-btn--Primary o-btn--sizeLarge">
        <slot></slot>
        Click Count: 0
      </button>
    `
    );
  });

  it('renders with provided props', async () => {
    const el = await fixture(html`<pie-button disabled size="Large" type="primary">Hello world</pie-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button disabled class="o-btn o-btn--primary o-btn--sizeLarge">
      <slot></slot>
      Click Count: 0
      </button>
    `
    );
  });

  it('handles a click', async () => {
    const el = (await fixture(html`<pie-button>Hello world</pie-button>`));
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <button class="o-btn o-btn--Primary o-btn--sizeLarge">
        <slot></slot>
        Click Count: 1
      </button>
    `
    );
  });
});
