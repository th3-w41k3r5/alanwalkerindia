// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        {/* Header Content */}
        <div className="header-content">
          <div className="left">
            {/* Icon */}
            <a href="http://alanwalkerindia.netlify.com" id="icon">
             <img src="aw_logo.svg" alt="icon" className="icon" />
            </a>
          </div>
          {/* Title */}
          <div className="center">Walkerworld: India Tour</div>
          {/* Navigation Panel Icon */}
          <div className="right">
            <img src="/icons8-menu.svg" alt="nav" className="nav-icon" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

