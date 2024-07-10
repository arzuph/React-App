// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1>Arzu Pashayeva</h1>
      <h2>Junior Web Designer</h2>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
