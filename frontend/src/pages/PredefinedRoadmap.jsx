// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PredefinedRoadmap.css';

const customizedDomains = [
  {
    name: 'Web Tech',
    topics: {
      'Web Development': ['Front-end Development', 'Back-end Development', 'Full-stack Development'],
    },
  },
  {
    name: 'Cybersecurity',
    topics: {
      'Network Security': ['Firewall', 'VPN', 'IDS/IPS'],
      'Application Security': ['Code Review', 'Penetration Testing', 'Vulnerability Assessment'],
      'Cloud Security': ['Cloud Provider Security', 'Cloud Storage Security', 'Cloud Network Security'],
    },
  },
  {
    name: 'AI',
    topics: {
      'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
      'Natural Language Processing': ['Text Processing', 'Speech Recognition', 'Language Generation'],
      'Computer Vision': ['Image Classification', 'Object Detection', 'Image Segmentation'],
    },
  },
  {
    name: 'DevOps',
    topics: {
      'CI/CD': ['Jenkins', 'Travis CI', 'CircleCI'],
      'Containerization': ['Docker', 'Kubernetes', 'OpenShift'],
      'Monitoring': ['Prometheus', 'Grafana', 'Nagios'],
    },
  },
  {
    name: 'Marketing',
    topics: {
      'Digital Marketing': ['SEO', 'PPC', 'Email Marketing'],
      'Content Marketing': ['Blogging', 'Video Content', 'Infographics'],
      'Social Media Marketing': ['Facebook', 'Twitter', 'Instagram'],
    },
  },
  {
    name: 'Finance',
    topics: {
      'Accounting': ['Financial Statements', 'Auditing', 'Taxation'],
      'Financial Analysis': ['Ratio Analysis', 'Financial Modeling', 'Valuation'],
      'Investment Banking': ['Mergers & Acquisitions', 'Equity Research', 'Private Equity'],
    },
  },
  {
    name: 'SDE',
    topics: {
      'Software Development': ['Algorithms', 'Data Structures', 'System Design'],
      'Programming Languages': ['Python', 'Java', 'C++', 'C', 'JavaScript'],
      'Tools and Framework': ['Springboot', 'Flask', 'Django', 'Rails', 'AngularJS'],
    },
  },
];

const PredefinedRoadmap = () => {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [response, setResponse] = useState('');
  const [customSelectedSubtopic, setCustomSelectedSubtopic] = useState({});

  useEffect(() => {
    setSelectedOption('');
    setCustomSelectedSubtopic({});
    setResponse('');
  }, [selectedDomain]);

  const handleDomainClick = (domainName) => {
    setSelectedDomain(domainName);
  };

  const handleCustomSubtopicChange = (subtopic) => {
    setCustomSelectedSubtopic((prevSubtopics) => ({
      ...prevSubtopics,
      [selectedDomain]: subtopic,
    }));
  };

  const handleStartJourney = async () => {
    try {
      const roadmap = { subtopics: selectedOption, roadmap };
      const response = await fetch('http://localhost:8000/api/v1/users/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(roadmap),
      });
      //const response = await axios.post('http://localhost:8000/api/v1/users/generate', { option: selectedOption, roadmap });
      setResponse(response.data.message);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setResponse('Failed to fetch AI response.');
    }
  };

  const selectedCustomDomainData = customizedDomains.find((domain) => domain.name === selectedDomain);

  return (
    <div className="predefined-roadmap">
      <h2>Roadmap</h2>
      <div className="domains-container">
        {customizedDomains.map((domain) => (
          <button
            key={domain.name}
            className={`domain-button ${selectedDomain === domain.name ? 'selected' : ''}`}
            onClick={() => handleDomainClick(domain.name)}
          >
            {domain.name}
          </button>
        ))}
      </div>

      {selectedDomain && selectedCustomDomainData && (
        <div className="options-container">
          {Object.entries(selectedCustomDomainData.topics).map(([topic, subtopics]) => (
            <div key={topic}>
              <h4>{topic}</h4>
              <div className="subtopics-container">
                {subtopics.map((subtopic) => (
                  <button
                    key={subtopic}
                    className={`option-button ${customSelectedSubtopic[selectedDomain] === subtopic ? 'selected' : ''}`}
                    onClick={() => handleCustomSubtopicChange(subtopic)}
                  >
                    {subtopic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDomain && (selectedOption || customSelectedSubtopic[selectedDomain]) && (
        <button className="start-button" onClick={handleStartJourney}>
          Start Your Journey
        </button>
      )}

      {response && (
        <div className="response-container">
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default PredefinedRoadmap;
