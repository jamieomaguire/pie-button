# PIE Button

This is a total work in progress. 

Currently the design is:

- define the WC in the `pie-button.js` file
- write any styles in `style.scss`
- there is an import to a `style.js` file inside the `generated` folder. This is deliberately empty and is populated when you run the `build` script `yarn build`.
- This script will transform the scss into a css file, then transform that into a javascript module that exports the compiled css as a string.
- This can then be imported by the web component using Lit's `css` function.

- we then use Rollup to bundle the web component into a ready to use js module

Again, total work in progress and probably a super gross flow for a real project but it demonstrates the following:

- We can build web components and reuse our SCSS library for styling
- We can style our web components using SCSS
- We can build and publish then using these styles and they will be encapsulated to the web component