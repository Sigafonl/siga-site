import React from 'react';
import Desktop from './pages/Desktop';
import "./scss/style.css";

function App() {
  const breakpoint = 620;

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO WORLD</h1>
      </header>
    </div>
  );

  // return width < breakpoint ? <Mobile /> : <Desktop/>;
}

export default App;
