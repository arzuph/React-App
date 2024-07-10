// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe'; // Create this later
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
        <Skills />
        <Experience />
      <main>
        {/* Other sections (Projects, Skills, Experience) will go here */}
      </main>
      <footer id="footer">
        <p>© 2024 Arzu Pashayeva. All rights reserved.</p>
        <p>
          <a href="https://github.com/arzu" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/arzu-pashayeva" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
