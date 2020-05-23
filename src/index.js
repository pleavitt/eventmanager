import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './styles/main.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import EventProvider from './context/EventContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EventProvider>
        <App />
      </EventProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
