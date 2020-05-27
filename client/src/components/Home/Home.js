import React,{Component} from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionIndex: 0,
      positionList: ['Software Developer', 'Mathematician', 'Follow @orwinmc']
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({ positionIndex: (this.state.positionIndex + 1) % this.state.positionList.length});
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return (
      <div className="Home">
        <br />
        <br />
        <div id="name">Michael Orwin</div>
        <div id="position">{this.state.positionList[this.state.positionIndex]}</div>
        <div id='socials'>
          <ul>
            <li><a href="https://www.linkedin.com/in/orwinmc/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faLinkedin} /></a></li>
            <li><a href="https://www.github.com/orwinmc" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faGithub} /></a></li>
            <li><a href="https://www.instagram.com/orwinmc" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faInstagram} /></a></li>
            <li><a href="https://www.facebook.com/orwinmc" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faFacebook} /></a></li>
            <li><a href="https://www.twitter.com/orwinmc" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faTwitter} /></a></li>
          </ul>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
