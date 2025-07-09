import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My React App</h1>
        <p>A simple React starter page</p>
      </header>

      <main className="main-content">
        <section className="card">
          <h2>Getting Started</h2>
          <p>This is a basic React page with a clean, modern design.</p>
          
          <div className="counter">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Simple</h3>
            <p>Clean and easy to understand code structure</p>
          </div>
          <div className="feature">
            <h3>Responsive</h3>
            <p>Looks great on all devices</p>
          </div>
          <div className="feature">
            <h3>Modern</h3>
            <p>Built with the latest React features</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
