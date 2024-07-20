import { useState } from 'react';
import './Machinelearning.css'; 

const steps = [
  { title: 'Math Basics', resources: ['Linear Algebra', 'Calculus', 'Probability'] },
  { title: 'Python', resources: ['Codecademy', 'Coursera', 'DataCamp'] },
  { title: 'Machine Learning Intro', resources: ['Coursera', 'fast.ai', 'Book'] },
  { title: 'Deep Learning (Optional)', resources: ['Coursera', 'Book', 'Book'] },
  { title: 'Data wrangling', resources: ['Kaggle Learn', 'Book', 'Pandas Docs'] },
  { title: 'Model Evaluation', resources: ['Google Crash Course'] },
];

const MachineLearningRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="roadmap">
      <h1>AI & Machine Learning Roadmap</h1>
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

export default MachineLearningRoadmap;
