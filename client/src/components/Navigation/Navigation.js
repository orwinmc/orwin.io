import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <a href="/"> Michael Orwin </a>
        <a href="/about"> About </a>
        <a href="/portfolio"> Portfolio </a>
        <a href="/research"> Research </a>
        <a href="/contact"> Contact Me</a>
      </nav>
    </div>
  );
}

export default Navigation;
