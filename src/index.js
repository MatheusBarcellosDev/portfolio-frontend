import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './providers/auth';
import GlobalStyles from './globalStyle' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>
);