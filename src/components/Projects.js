// src/components/Projects.js
import React from 'react';
import './Projects.css';
import project1 from '../images/CaptureTyrrel.jpg'; // Update with actual project images
import project2 from '../images/CapturePleasure.PNG';
import project3 from '../images/Travel.PNG';

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>I used Bootstrap to redesign the Tyrell County, NC Website. I changed the background color of the header and made the hero images a little bit bigger. Also, I changed the layout and fonts for the main content and added more images.</p>
        </div>
        <div className="project">
          <img src={project2} alt="Project 2" />
          <h3>Project 2</h3>
          <p>I changed the navigation and moved it to the top of the page, organized it into seven pages, and added some drop-down menus. Also, I changed the background color of the header and made the hero images a little bit bigger. </p>
        </div>
        <div className="project">
          <img src={project3} alt="Project 3" />
          <h3>Project 3</h3>
          <p>My task for this project was to research and choose a destination. I selected my dream destination, Istanbul, Turkey. I created four pages of a magazine article about culture and unique things to do in Istanbul using Adobe InDesign.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
