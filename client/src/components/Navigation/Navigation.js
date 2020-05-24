import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li><a href="/"> Michael Orwin </a></li>
          <li><a href="/about"> About </a></li>
          <li><a href="/portfolio"> Portfolio </a></li>
          <li><a href="/research"> Research </a></li>
          <li><a href="/contact"> Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
