// src/components/NavBar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import profileImage from '../assets/profile.png'; // Ensure this path is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Skill Up
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guide" className="nav-links">
              Guidelines
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links">
              About Us
            </Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/signin" className="auth-button left-half">SIGN IN</Link>
          <Link to="/signup" className="auth-button right-half">SIGN UP</Link>
        </div>
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
