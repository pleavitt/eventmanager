import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Events from './pages/Events';
import Event from './pages/Event';
import EventProvider from './context/EventContext';
import ToastContainer from './components/ToastContainer';
import { ToastProvider } from './components/ToastContext';

const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
