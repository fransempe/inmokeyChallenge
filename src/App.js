import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import PropertiesList from './components/PropertiesList'
import PropertiesDetails from './components/PropertiesDetails'

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Route exact path="/" component={PropertiesList} />
        <Route path="/view/:id" component={PropertiesDetails} />
      </Router>
    </div>
  );
}

export default App;
