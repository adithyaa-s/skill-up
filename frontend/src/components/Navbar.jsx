import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS styles

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'My Roadmap', path: '/my-roadmap' },
    { label: 'About Us', path: '/Aboutus' },
  ];

  return (
    <nav className="navbar">
      <img src="./src/images/skilluplogo.jpeg" alt="SkillUp Logo" className="nav-logo" />
      <Link to="/home"><button className="navbutton">Home</button></Link>
      <Link to="/signin"><button className="navbutton">SignIn</button></Link>
      <Link to="/guide"><button className="navbutton">Guidelines</button></Link>
      <button className="nav-menu-button" onClick={toggleMenu}>
        <img src="./src/images/menulogo.png" alt="Menu Icon" className="menu-icon" /> {/* Menu icon image */}
      </button>
      {isMenuOpen && (
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* Existing Navigation Links */}
      
    </nav>
  );
}
