import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './context/Context'
import {DatabaseContextProvider} from './context/databaseContext'
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <DatabaseContextProvider>
        <Router>
          <App />
        </Router>
      </DatabaseContextProvider>

    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

