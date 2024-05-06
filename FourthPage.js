import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import './four.css';

const FourthPage = () => {
  return (
    <div className="four">
      <header>
        <h1>Hearing test</h1>
      </header>
      <div className="center-content">
        <div className="card">
          <h2 class="right">Right Ear</h2>
          <img src="right1.png" alt="Right" height="100px" width="100px" />
          <p>Wear the headphone, Start test, Click ok if you hear beep sound, Else click cancel</p>
          <Link to="/right" className="start-button1">Start Right Ear Test</Link> {/* Use Link instead of <a> */}
        </div>
        <div className="card1">
          <h2>Left Ear</h2>
          <img src="left.png" alt="Left" height="100px" width="100px" />
          <p>Wear the headphone, Start test, Click ok if you hear beep sound, Else click cancel</p>
          <Link to="/left" className="start-button">Start Left Ear Test</Link> {/* Use Link instead of <a> */}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
