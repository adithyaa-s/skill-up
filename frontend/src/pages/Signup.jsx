// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/Signup.css';
import GeneralDetails from './GeneralDetails'; // Make sure to import GeneralDetails


const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'mail.com'];

// eslint-disable-next-line react/prop-types
const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showGeneralDetailsForm, setShowGeneralDetailsForm] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      return false;
    }
    const domain = email.split('@')[1];
    return validDomains.includes(domain);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
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

    setShowGeneralDetailsForm(true);
  };

  return (
    <div className="container">
      {!showGeneralDetailsForm ? (
        <div>
          <h2>Sign Up</h2>
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
            <div className="input-group">
              <label>Re-enter Password:</label>
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
            <button type="submit" className='submitbutton'style={{marginTop : "15px" , textAlign:"center", paddingTop:"8px"}}>Sign Up</button>
          </form>
        </div>
      ) : (
        <GeneralDetails email={email} password={password} />
      )}
      <p className="toggle-link">
        Already have an account? <a href="/signin" onClick={toggleForm}>Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;