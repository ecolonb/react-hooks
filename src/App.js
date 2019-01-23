import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>You clicked {'{ ' + count + ' }'} times</p>
          <button
            onClick={() => setCount(count + 1)}
            style={{ width: '500px', height: '50px', fontSize: '20px' }}
          >
            Click me
          </button>

          <div>
            <h1>Jsx example => {'{ }'} </h1>
          </div>
        </header>
      </div>
    </div>
  );
}
