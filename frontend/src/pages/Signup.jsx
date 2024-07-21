import React, { useState } from 'react';
import './Signup.css';
import GeneralDetailsForm from './GeneralDetails';
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate

const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'mail.com'];

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showGeneralDetailsForm, setShowGeneralDetailsForm] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      return false;
    }
    const domain = email.split('@')[1];
    return validDomains.includes(domain);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address from Gmail, Yahoo, or Microsoft.');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }
    if (password !== reenteredPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    setErrorMessage('');

    const userData = {
      email,
      password,
    };

    fetch('http://localhost:8000/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          setShowGeneralDetailsForm(true);
          navigate('/');
        } else {
          setErrorMessage('Signup failed. Please try again.');
        }
      })
      .catch(() => {
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  const handleGeneralDetailsSubmit = (details) => {
    console.log('General Details Submitted:', details);

  };

  return (
    <div className="container">
      {!showGeneralDetailsForm ? (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="input-group">
              <label>Re-enter Password</label>
              <input
                type="password"
                value={reenteredPassword}
                onChange={(e) => {
                  setReenteredPassword(e.target.value);
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      ) : (
        <GeneralDetailsForm onNext={handleGeneralDetailsSubmit} />
      )}
      <p className="toggle-link">
        Already have an account? <a href="/signin" onClick={toggleForm}>Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
