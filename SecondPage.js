import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import './second.css'; 

const SecondPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', age: '', gender: '' });
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLoginForm(prevIsLoginForm => !prevIsLoginForm);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      let response;
      if (isLoginForm) {
        response = await axios.post('/login', formData);
      } else {
        response = await axios.post('/signup', formData);
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="centered-image">
          <img src="img.png" alt="Your" height="70px" width="60px" />
        </div>
        <div className={`title ${isLoginForm ? 'login' : 'signup'}`}>{isLoginForm ? 'Login Form' : 'Signup Form'}</div>
        <div className={`title ${!isLoginForm ? 'login' : 'signup'}`} onClick={toggleForm}>
          {isLoginForm ? 'Signup Form' : 'Login Form'} 
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginForm} onChange={toggleForm} />
          <input type="radio" name="slide" id="signup" checked={!isLoginForm} onChange={toggleForm} />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleFormSubmit} className={isLoginForm ? 'login' : 'signup'}>
            {isLoginForm ? (
              <>
                <div className="field">
                  <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Age" name="age" value={formData.age} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Gender" name="gender" value={formData.gender} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </>
            )}
            <div className="sj">
      <Link to="/third">Next</Link> {/* Use Link component instead of <a> */}
        </div>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SecondPage;
