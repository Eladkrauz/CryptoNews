/**
 * This file is the entry point for the Crypto News application.
 * It renders the App component within a Router and DarkLightModeProvider context.
 * The DarkLightModeProvider context manages the dark/light mode for the application.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DarkLightModeProvider } from './contexts/DarkLightModeContext';

// Render the App component into the root element with Router and DarkLightModeProvider context
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DarkLightModeProvider>
        <App />
      </DarkLightModeProvider>
    </Router>
  </React.StrictMode>
);
