import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { FunctionProvider } from './context/FunctionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FunctionProvider>
    <Router>
      <App />
    </Router>
  </FunctionProvider>
);
