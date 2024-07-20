import { useState } from 'react';
import './Gamedeveloper.css'; 

const steps = [
  { title: 'Game Design Basics', resources: ['GameDev.net', 'GDC Vault', 'Book'] },
  { title: 'Choose Game Engine (Optional)', resources: ['Unity', 'Unreal Engine', 'Godot'] },
  { title: 'Programming Languages', resources: ['C#', 'C++', 'Python', 'GDScript'] },
  { title: 'Art & Animation (Optional)', resources: ['2D/3D Art', 'Blender', 'Aseprite'] },
  { title: 'Sound & Music (Optional)', resources: ['Sound Design', 'Music Composition'] },
  { title: 'Build Portfolio', resources: ['Itch.io', 'Game Jams'] },
];

const GameDevRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="roadmap">
      <h1>Game Developer Roadmap</h1>
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

export default GameDevRoadmap;
