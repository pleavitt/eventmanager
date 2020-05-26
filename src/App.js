import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import EventProvider from './context/EventContext';
import { ToastProvider } from './components/ToastContext';

import './App.css';
import Layout from './components/Layout';
import Events from './pages/Events';
import Event from './pages/Event';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <Router>
      <ToastProvider>
        <EventProvider>
          <ToastContainer>
            <Layout>
              <Route exact path="/" component={Events} />
              <Route exact path="/events" component={Events} />
              <Route path="/events/:id" component={Event} />
            </Layout>
          </ToastContainer>
        </EventProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
