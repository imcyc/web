import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{width: '10em'}} />
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      </header>
    </div>
  );
}

export default App;
