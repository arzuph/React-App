// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import yourImage from '../images/girl-2013447_1280.jpg'; // Update the path to your image

function AboutMe() {
  return (
    <section id="aboutme" className="AboutMe">
      <img src={yourImage} alt="Profile" />
      <h2>About Me</h2>
      <p>
        Hi, I'm <span className="highlight">Arzu Pashayeva</span>, a junior Web Designer passionate about creating visually appealing and user-friendly websites. With a foundation in <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, and <span className="highlight">JavaScript</span>, I enjoy bringing creative designs to life.
      </p>
      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Responsive Design</span>
        <span>Adobe Photoshop</span>
      </div>
    </section>
  );
}

export default AboutMe;
