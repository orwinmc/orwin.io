import React from 'react';
/*import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";*/

import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Research from "./components/Research/Research";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = {
      currentPage: 'home'
    };
  }

  changePage(newPage) {
    this.setState({currentPage: newPage});
  }

  render() {
    var pageComponent;
    var mode;
    if (this.state.currentPage === 'home') {
      pageComponent = <Home />;
      mode = 'dark';
    } else if (this.state.currentPage === 'about') {
      pageComponent = <About />;
      mode = 'light';
    } else if (this.state.currentPage === 'portfolio') {
      pageComponent = <Portfolio />;
      mode = 'dark';
    } else if (this.state.currentPage === 'research') {
      pageComponent = <Research />;
      mode = 'dark';
    } else if (this.state.currentPage === 'blog') {
      pageComponent = <Blog />;
      mode = 'light';
    } else if (this.state.currentPage === 'contact') {
      pageComponent = <Contact />;
      mode = 'light';
    }

    return (
      <div className={'App ' + mode}>
        <div className={'screen ' + this.state.currentPage}>
          <Navigation change={this.changePage}/>
          {pageComponent}
        </div>
      </div>
    );
  }
}

export default App;
