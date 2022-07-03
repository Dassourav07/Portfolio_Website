import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActiveElementContextProvider } from './context/ActiveElement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveElementContextProvider>
      <App />
    </ActiveElementContextProvider>
  </React.StrictMode>
);
