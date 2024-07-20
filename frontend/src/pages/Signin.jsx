import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn = ({ toggleForm, onSubmit }) => {
  const navigate = useNavigate(); // Ensure this is inside the component function

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

      if (res.status === 200) {
        setResponseMessage('Login Successful');
        setTimeout(() => {
          navigate('/');
        }, 1500); // Navigate to '/' after successful login
      } else if(res.status === 404) {
        setResponseMessage('User Not Found');
      }

    } catch (error) {
      setResponseMessage('Login Failed');
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="input-group">
          <label>Email</label>
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
          <label>Password</label>
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
        <button type="submit" style={{ marginTop: "15px" , textAlign:"center", paddingTop:"8px"}}>Sign In</button>
      </form>

      <p className="toggle-link">
        Don't have an account? <a href="/signup" onClick={toggleForm}>Sign Up</a>
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
