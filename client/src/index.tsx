import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './font.css';
import './color.css';
import './index.css';
const root = document.getElementById('root');

createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
