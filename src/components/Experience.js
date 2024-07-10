// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Customer Service Representative',
      company: 'Alpatech Inc.',
      date: 'January 2020 - Present',
      responsibilities: [
        'Assisted customers with inquiries and issues via phone and email.',
        'Resolved customer complaints promptly and professionally.',
        'Provided product information and recommendations to customers.'
      ]
    },
    {
      title: 'Event Organizer',
      company: 'Azerifriendship Event Management',
      date: 'May 2018 - December 2019',
      responsibilities: [
        'Planned and executed cultural events celebrating Azerbaijani heritage.',
        'Coordinated logistics including venue booking, catering, and entertainment.',
        'Managed event budgets and ensured projects met deadlines.'
      ]
    }
  ];

  return (
    <section id="experience" className="Experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{experience.title}</h3>
              <p className="experience-date">{experience.date}</p>
            </div>
            <p className="experience-company">{experience.company}</p>
            <ul className="experience-responsibilities">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
