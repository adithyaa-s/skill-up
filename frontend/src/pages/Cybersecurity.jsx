import { useState } from 'react';
import './Cybersecurity.css'; 

const steps = [
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Gain a solid understanding of core cybersecurity concepts.',
    resources: [
      {
        title: 'SANS Institute - Introduction to Cyber Security (SEC301)',
        url: 'https://www.sans.org/cyber-security-courses/introduction-to-cyber-security-sec301/',
      },
      {
        title: 'Cybrary - Introduction to Cybersecurity',
        url: 'https://www.cybrary.it/course/it-security/',
      },
      {
        title: 'National Initiative for Cybersecurity Careers & Studies (NICCS)',
        url: 'https://niccs.cisa.gov/cybersecurity-workforce-framework/overview',
      },
    ],
  },

];

const CybersecurityRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="roadmap">
      <h1>Cybersecurity Roadmap</h1>
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

export default CybersecurityRoadmap;
