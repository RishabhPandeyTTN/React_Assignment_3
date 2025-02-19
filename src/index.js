import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginContextProvider from './context/LoginContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
    <ThemeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContextProvider>
  </LoginContextProvider>

);

reportWebVitals();
