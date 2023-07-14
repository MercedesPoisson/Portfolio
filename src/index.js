import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './components/ColorContext';

ReactDOM.render(
  <BrowserRouter>
<React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById('root')
);
