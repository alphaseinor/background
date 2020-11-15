import {useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [background, setBackground] = useState("https://source.unsplash.com/random/640x480")


  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <header className="App-header">
        <label>
          Background: 
          <input value={background} onChange={(e) => {
            setBackground(e.target.value)
          }}/>
        </label>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
