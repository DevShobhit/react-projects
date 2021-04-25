import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth } from './services/auth';

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <App />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);

