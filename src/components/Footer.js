// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://github.com/arzuph" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/arzu-pashayeva" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
