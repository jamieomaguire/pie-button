import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById('btn').addEventListener('count-changed', () => {
      setCount(count + 1);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You clicked {count} times</p>
        <pie-button id="btn" size="Large" type="primary">Button 1</pie-button>
      </header>
    </div>
  );
}

export default App;
