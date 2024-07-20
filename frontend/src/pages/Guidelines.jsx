import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for using useNavigate hook
import { Navbar } from '../components/Navbar';
function Guidelines() {
  const [selectedRole, setSelectedRole] = useState(''); // State to manage user selection
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleNavigate = () => {
    switch (selectedRole || '') { // Use empty string as default for preferredRole
      case 'ai':
        navigate('/machinelearning');
        break;
      case 'cybersecurity':
        navigate('/cybersecurity');
        break;
      case 'fsd':
        navigate('/fullstack');
        break;
      case 'gamedev':
        navigate('/gamedev');
        break;
      case 'dataanalyst':
        navigate('/dataanalyst');
        break;
      default:
        // Handle cases where no role is selected (optional)
        alert('Please select a role to proceed.'); // Example placeholder
    }
  };

  return (
    
    <div>
      <Navbar/>
      <h1>Welcome! Choose your preferred development path:</h1>
      <select id="roleSelect" value={selectedRole} onChange={handleRoleChange}>
        <option value="">-- Select a Role --</option>
        <option value="ai">Machine Learning (AI)</option>
        <option value="cybersecurity">Cybersecurity</option>
        <option value="fsd">Full-Stack Development</option>
        <option value="gamedev">Game Development</option>
        <option value="dataanalyst">Data Analyst</option>
      </select>
      <button disabled={!selectedRole} onClick={handleNavigate}>
        Start Your Journey!
      </button>
    </div>
  );
}

export default Guidelines;
