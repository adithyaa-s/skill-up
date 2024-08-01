// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Guidelines.css';

const Guidelines = () => {
  return (
    <div className="guidelines">
      <div className="guidelines-container">
        <h1>Start Your Journey</h1>
        <p className="intro-text">Explore opportunities to enhance your skills and customize your learning path to achieve your personal and professional goals.</p>
        <div className="cards-container">
          <Link to="/predefinedroadmap" className="guidelines-card">
            <h2>Kickstart a New Skill</h2>
            <p>Embark on your learning journey with a fresh new skill. Our carefully curated courses will help you get started and guide you through the process. Begin now and unlock new opportunities for growth and success.</p>
          </Link>
          <Link to="/customizedroadmap" className="guidelines-card">
            <h2>Tailor Your Learning Path</h2>
            <p>Customize your educational journey to match your goals and aspirations. Explore a variety of learning paths designed to fit different career objectives and interests. Personalize your path to maximize your potential and achieve your ambitions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
