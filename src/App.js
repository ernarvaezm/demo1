import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const meta = document.querySelector('meta[name=theme-color]')
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color-logo');

    console.log(meta);
    console.log(color);
  }, []);

  const sayHello = (name) => {


    const meta = document.querySelector('meta[name=theme-color]')
    const color1 = getComputedStyle(document.documentElement).getPropertyValue('--browser-default1');
    const color2 = getComputedStyle(document.documentElement).getPropertyValue('--browser-blue2');
    const color3 = getComputedStyle(document.documentElement).getPropertyValue('--browser-green3');

    let value5 = Math.floor(Math.random() * 4);

    switch (value5) {
      case 1:
        meta.setAttribute('content', color1)
        break;

      case 2:
        meta.setAttribute('content', color2)
        break;
      case 4:
        meta.setAttribute('content', color3)
        break;
      default:
        meta.setAttribute('content', 'black')
        break;
    }

    console.log(meta);
    console.log(value5);

  };


  return (
    <div className="App">
      <header className="App-header">
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

      <div className="demo">
        <button
          onClick={() => {
            sayHello("Yomi");
          }}
        >
          Say Hello
        </button>

      </div>

    </div>
  );
}

export default App;
