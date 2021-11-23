import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import catworld from '.pages/catworld';
import cyclecat from '.pages/cyclecat';
import noncyclecat from '.pages/noncyclecat';

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' component={catworld} />
        <Route path='/' component={cyclecat} />
        <Route path='/' component={noncyclecat} />
      </Switch>
    </Router>
   
   /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src/App.js </code> and save to reload.
          <p> Hello? Is this the cat app? </p>
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
    </div>*/
  );
}

export default App;
