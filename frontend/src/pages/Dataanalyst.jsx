import { useState } from 'react';
import './Dataanalyst.css'; // Import CSS file for styling

const steps = [
  {
    title: 'Math & Stats',
    resources: [
      'Khan Academy',
      'Udacity - Intro to Statistics',
      'DataCamp - Introduction to Statistics in Python',
    ],
  },
  {
    title: 'Python',
    resources: [
      'Codecademy - Learn Python 3',
      'Coursera - Python for Everybody Specialization',
      'DataCamp - Python for Data Science',
    ],
  },
  {
    title: 'Data Wrangling',
    resources: ['Pandas', 'Kaggle Learn', 'NumPy'],
  },
  {
    title: 'Data Visualization',
    resources: ['Tableau', 'Power BI', 'DataCamp - Data Visualization with Python'],
  },
  {
    title: 'SQL',
    resources: ['Khan Academy', 'Codecademy - Learn SQL', 'SQLBolt'],
  },
  {
    title: 'Machine Learning (Optional)',
    resources: ['Coursera', 'fast.ai', 'Kaggle Learn'],
  },
  {
    title: 'Build Portfolio',
  },
];

const DataAnalystRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="roadmap">
      <h1>Data Analyst Roadmap</h1>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={activeStep === index ? 'active' : ''}>
            <button onClick={() => handleStepClick(index)}>
              {step.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataAnalystRoadmap;
