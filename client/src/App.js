import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Research from "./components/Research/Research";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/research" component={Research} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
