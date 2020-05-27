import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
  onClick(newPage) {
    this.props.change(newPage);
  }

  render() {
    return (
      <div className="Navigation">
        <nav>
          <button onClick={() => this.onClick('home')}>Michael Orwin</button>
          <button onClick={() => this.onClick('about')}> About</button>
          <button onClick={() => this.onClick('portfolio')}> Portfolio</button>
          <button onClick={() => this.onClick('research')}> Research</button>
          <button onClick={() => this.onClick('blog')}> Blog</button>
          <button onClick={() => this.onClick('contact')}> Contact Me</button>
        </nav>
      </div>
    );
  }
}

export default Navigation;
