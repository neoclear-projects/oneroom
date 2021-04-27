import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';

// Render the app to html template
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
