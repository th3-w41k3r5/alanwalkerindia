import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global styles if needed
import App from './App'; // Import your main component
import reportWebVitals from './reportWebVitals'; // Import for web vitals reporting

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure web vitals, uncomment the line below
// reportWebVitals();

