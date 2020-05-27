import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <center>
      <span className='title'> Contact Information </span><br />
      <span className='subtitle'> Have any questions or just interested in talking? Fill out the form below! (Not enabled) </span>
      </center>
      <br /><br />
      <div className='card'>
        Your Email Address: <input placeholder="example@email.format" /><br />< br/>
        Your Name: <input placeholder="John Doe" />< br/>< br/>
        <textarea /><br /><br />
        <center>
          <button>Send</button><br />
        </center>
      </div><br />
      <center>
        <span className='subtitle'> I'll try to respond as quickly as I can to each new message. </span>
        <br />
        <br />
      </center>
    </div>
  );
}

export default Contact;
