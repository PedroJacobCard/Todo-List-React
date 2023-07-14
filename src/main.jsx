import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/index.jsx';

const root = document.querySelector('#root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
