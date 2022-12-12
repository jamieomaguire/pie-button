import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p id="output">You clicked 0 times</p>
    <pie-button id="counter" size="Large" type="primary">Button 1</pie-button>
  </div>
`
let count = 0;

document.querySelector('#counter').addEventListener('count-changed', () => {
  count++;
  document.querySelector('#output').innerHTML = `You clicked ${count} times`;
})
