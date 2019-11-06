import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
      <Dashboard  />
      <header className="App-header">
        <p>
          Header
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dashboard
        </a>
      </header>

    </div>
  );
}

export default App;
