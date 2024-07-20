import React from 'react';
import './Aboutus.css';

export default function Aboutus() {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About SkillUp</h1>
        <p>
          SkillUp is a comprehensive online learning platform designed to empower
          individuals with the skills they need to thrive in today's ever-changing
          job market. We offer a wide range of high-quality courses taught by
          industry experts, covering various in-demand fields like technology,
          business, and design.
        </p>
        <p>
          Our mission is to make education accessible and affordable for everyone.
          Whether you're a recent graduate, a seasoned professional looking to
          upskill, or someone seeking a career change, SkillUp provides the
          resources and guidance you need to achieve your learning goals.
        </p>
      </div>
      <div className="about-us-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <i className="fas fa-graduation-cap"></i>
            Quality Education: We prioritize high-quality content and expert
            instruction to ensure you gain valuable skills and knowledge.
          </li>
          <li>
            <i className="fas fa-user-friends"></i>
            Supportive Community: We foster a supportive community where learners
            can connect, collaborate, and share their experiences.
          </li>
          <li>
            <i className="fas fa-rocket"></i>
            Career Advancement: We aim to equip you with the skills and knowledge
            to advance your career or transition to a new field.
          </li>
          <li>
            <i className="fas fa-globe"></i>
            Global Accessibility: We strive to make learning accessible
            worldwide, regardless of location or background.
          </li>
        </ul>
      </div>
      
      <div className="about-us-team">
        <h2>Meet the SkillUp Team</h2>
        
      </div>
    </div>
  );
}
