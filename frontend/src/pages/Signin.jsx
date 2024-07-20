// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const navigate = useNavigate();

const SignIn = ({ toggleForm, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    setErrorMessage('');
  
    try {
      const res = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setResponseMessage('Login Successful');
      
      // Check response message after it's set
      if (responseMessage === 'Login Successful') {
        navigate('/');
      }
  
    } catch (e) {
      setResponseMessage('Login Failed');
    }
  };
  
  

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage('');
            }}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage('');
            }}
            required
          />
        </div>
        {errorMessage && (
          <p className="error-message" aria-live="assertive">
            {errorMessage}
          </p>
        )}
        <button type="submit">Sign In</button>
      </form>

      <p className="toggle-link">
        Dont have an account? <a href="/Signup" onClick={toggleForm}>Sign Up</a>
      </p>

      {responseMessage && (
        <p className="response-message" aria-live="assertive">
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default SignIn;
