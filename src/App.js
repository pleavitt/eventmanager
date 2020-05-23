import React, { useState } from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Layout from './components/Layout';
import Events from './pages/Events';
import Event from './pages/Event';

function App() {
  return (
    <Layout>
        <Route exact path='/' component={Events} />
        <Route exact path='/events' component={Events} />
        <Route path='/events/:id' component={Event} />
    </Layout>
  );
}

export default App;
