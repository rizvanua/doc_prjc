import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Log In</h2>
        <>
        <LogIn/>
        </>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
