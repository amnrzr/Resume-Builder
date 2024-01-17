import React from 'react';
import Header from '../Header';
import './about.css'
function About() {
  return (
    
    <div className="about-page center-text">
    <Header/>
      <h1>About Resume Builder</h1>
      <p>
        Welcome to Resume Builder, your go-to platform for creating professional and visually appealing resumes.
        Whether you're a seasoned professional or just starting your career journey, we've got you covered.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower individuals to present their skills and experiences effectively through
        beautifully crafted resumes. We understand the importance of a well-designed resume in making a
        positive impression on potential employers.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Intuitive and User-Friendly Interface</li>
        <li>Customizable Resume Templates</li>
        <li>Dynamic Sections for Personal, Educational, and Professional Information</li>
        <li>Skills and Key Achievements Showcase</li>
        <li>Downloadable PDF Resumes</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We'd love to hear from you! Reach out to us at{' '}
        <a href="mailto:info@resumebuilder.com">info@resumebuilder.com</a>.
      </p>

      <h2>Stay Connected</h2>
      <p>Follow us on social media for updates and tips:</p>
      <div className="social-icons">
       </div>
    </div>
  );
}

export default About;
