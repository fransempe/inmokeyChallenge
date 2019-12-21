import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import PropertiesList from './components/PropertiesList'
import PropertiesDetails from './components/PropertiesDetails'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Route exact path="/" component={PropertiesList} />
        <Route path="/view/:id" component={PropertiesDetails} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
