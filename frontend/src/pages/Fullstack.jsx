import React, { useState } from 'react';
import './Fullstack.css'; 

const steps = [
  {
    title: 'Front-End Fundamentals (HTML, CSS, JavaScript)',
    description: 'Learn the building blocks of web development.',
    resources: [
      {
        title: 'HTML Tutorial',
        url: 'https://www.w3schools.com/html/',
      },
      {
        title: 'CSS Tutorial',
        url: 'https://www.w3schools.com/css/',
      },
      {
        title: 'JavaScript Tutorial',
        url: 'https://www.w3schools.com/js/',
      },
    ],
  },
  
];

const FullstackRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="roadmap">
      <h1>Full-Stack Development Roadmap</h1>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={activeStep === index ? 'active' : ''}>
            <button onClick={() => handleStepClick(index)}>
              {step.title}
            </button>
            {activeStep === index && (
              <div className="step-details">
                <p>{step.description}</p>
                <ul>
                  {step.resources.map((resource, i) => (
                    <li key={i}>
                      <a href={resource.url}>{resource.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullstackRoadmap;
