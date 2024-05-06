import React from 'react';
import { Link } from 'react-router-dom'; 
import './third.css';
const ThirdPage = () => {
  return (
    <div className="container">
      <center>
        <h1>Before you begin</h1>
      </center>
      <div className="left-content">
        <div>
          <img src="icon1.png" alt="Left" />
          <h1>Do you have tinnitus?</h1>
          <p>You'll hear constant white noise during the test. If you find this uncomfortable, don't take the test.</p>
        </div>
        <div>
          <img src="icon2.jpg" alt="Left" />
          <h1>Grab your headphones</h1>
          <p>You'll get a more accurate result if you use headphones or earphones rather than built-in speakers.</p>
        </div>
        <div>
          <img src="icon3.png" alt="Left" />
          <h1>Find a quiet place</h1>
          <p>Take the hearing test somewhere you won't be disturbed. Click the "Generate Audio" button. If you hear the sound, press "YES" else click cancel.</p>
        </div>
      </div>
      <div className="next-button">
      <Link to="/four">Next</Link> {/* Use Link component instead of <a> */}
    </div>
    </div>
  );
};

export default ThirdPage;
