import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
