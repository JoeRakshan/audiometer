import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'; 

const App = () => {
  return (
    <div className="body">
      <h1 className="app-title">
        <span className="ear-icon"><i className="fas fa-ear"></i></span>
        <span className="animated-letter">H<span className="animated-letter">e</span>arw<span className="animated-letter">e</span>ll</span>
      </h1>
      <img src="test.png" alt="App Logo" />
      <h3 className="welcome-heading">Welcome to Hearwell</h3>
      <p className="tagline">Hear better, Live better</p>
      {/* Use Link instead of a regular anchor tag */}
      <Link to="/second" className="get-started-button"><b>Get Started</b></Link>
    </div>
  );
};

export default App;
