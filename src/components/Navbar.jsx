import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">FR</span>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#organizations">Organizations</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>

        <a href="#contact" className="btn-primary contact-btn">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
