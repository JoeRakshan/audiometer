import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './second.css';

const SecondPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    gender: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLoginForm(prevIsLoginForm => !prevIsLoginForm);
  };

  // Handle input changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  

  // Handle form submission
  const handleFormSubmit = async event => {
    event.preventDefault();
    const baseUrl = 'http://localhost:5000'; // Ensure this matches your backend URL
  
    try {
      let response;
      if (isLoginForm) {
        response = await axios.post(`${baseUrl}/api/auth/login`, formData);
        
        if (response && response.data) {
          setMessage(response.data.message || 'Login successful');
          // Save token to local storage if needed
          localStorage.setItem('token', response.data.token);
          // Navigate to ThirdPage
          navigate('/third');
        } else {
          setMessage('Unexpected response structure');
        }
      } else {
        response = await axios.post(`${baseUrl}/api/auth/signup`, formData);
        
        if (response && response.data) {
          setMessage(response.data.message || 'Signup successful');
          // Clear form fields and reset state for signup
          setFormData({
            email: '',
            password: '',
            name: '',
            age: '',
            gender: ''
          });
          // Optionally, switch to login form
          setIsLoginForm(true);
        } else {
          setMessage('Unexpected response structure');
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.error || 'An error occurred');
      } else {
        setMessage('Server error or network issue');
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="centered-image">
          <img src="img.png" alt="Logo" height="70px" width="60px" />
        </div>
        <div className={`title ${isLoginForm ? 'login' : 'signup'}`}>
          {isLoginForm ? 'Login Form' : 'Signup Form'}
        </div>
        <div className={`title ${!isLoginForm ? 'login' : 'signup'}`} onClick={toggleForm}>
          {isLoginForm ? 'Signup Form' : 'Login Form'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLoginForm}
            onChange={toggleForm}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginForm}
            onChange={toggleForm}
          />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleFormSubmit} className={isLoginForm ? 'login' : 'signup'}>
            {isLoginForm ? (
              <>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </>
            )}
            <div className="sj">
            </div>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SecondPage;
