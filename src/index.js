import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './context/Context'
import {FirebaseContext} from './context/firebase'
import {firebaseApp} from './lib/firebase'
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebaseApp}}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

