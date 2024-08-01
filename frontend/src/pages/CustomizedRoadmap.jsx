// // src/screens/CustomizedRoadmap.js
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import Navbar if used
// import '../styles/CustomizedRoadmap.css'; // Update path if necessary

// function CustomizedRoadmap() {
//   const [selectedSubtopics, setSelectedSubtopics] = useState([]);
//   const [response, setResponse] = useState('');
//   const [learnMoreChecked, setLearnMoreChecked] = useState(false); // Added state for checkbox
//   const topics = [
//     'Computer Science', 'React', 'Vue', 'Express', 'Angular', 'JavaScript', 'Node.js', 'TypeScript', 'Python', 'SQL',
//     'System Design', 'API Design', 'ASP.NET Core', 'Java', 'C++', 'Flutter', 'Spring Boot', 'Go Roadmap',
//     'Rust', 'GraphQL', 'Design and Architecture', 'Design System', 'React Native', 'AWS', 'Ethical Hacking',
//     'Docker', 'Kubernetes', 'MongoDB', 'Django'
//   ];

//   const navigate = useNavigate();

//   const handleSubtopicChange = (subtopic) => {
//     setSelectedSubtopics((prevSubtopics) => 
//       prevSubtopics.includes(subtopic)
//         ? prevSubtopics.filter((st) => st !== subtopic)
//         : [...prevSubtopics, subtopic]
//     );
//   };

//   const handleNavigate = async () => {
//     if (selectedSubtopics.length > 0) {
//       // Manually inputted generated answer as a string containing JSON
//       const generatedAnswer = JSON.stringify( [
//         '## Career Paths with React, Express, and Node.js\n' +
//           '\n' +
//           '### Front-End Developer\n' +
//           '\n' +
//           '* *Responsibilities:* Design and implement the user interface (UI) using React and related tools.\n' +      
//           '* *Skills:* React, HTML, CSS, UI design principles.\n' +
//           '* *Resources:*\n' +
//           '    * [Frontend Master](https://frontendmasters.com/)\n' +
//           '    * [Udemy React Course](https://www.udemy.com/course/react-the-complete-guide/)\n' +
//           '    * [React Projects](https://reactprojects.com/)\n' +
//           '\n' +
//           '### Back-End Developer\n' +
//           '\n' +
//           '* *Responsibilities:* Develop and maintain the server-side functionality using Node.js and Express.\n' +    
//           '* *Skills:* Node.js, Express, RESTful APIs, databases.\n' +
//           '* *Resources:*\n' +
//           '    * [Node.js Tutorial](https://nodejs.org/en/docs/)\n' +
//           '    * [Express.js Tutorial](https://expressjs.com/en/starter/hello-world.html)\n' +
//           '    * [Build Node.js Projects with Express](https://www.digitalocean.com/community/tutorials/how-to-use-expressjs-to-create-a-restful-api)\n' +
//           '\n' +
//           '### Full-Stack Developer\n' +
//           '\n' +
//           '* *Responsibilities:* Design and implement both the front-end and back-end using React, Express, and Node.js.\n' +
//           '* *Skills:* React, Node.js, Express, RESTful APIs, UI design.\n' +
//           '* *Resources:*\n' +
//           '    * [Roadmap to Full-Stack Web Development](https://www.codecademy.com/learn/introduction-to-full-stack-web-development)\n' +
//           '    * [Full-Stack Open MOOC](https://fullstackopen.com/en/)\n' +
//           '    * [MERN Stack Projects](https://mernstack.io/)\n' +
//           '\n' +
//           '## Roadmap to Mastery\n' +
//           '\n' +
//           '### Foundational Skills\n' +
//           '\n' +
//           '* *JavaScript:* Master the fundamentals of JavaScript, including data types, operators, control flow, and functions.\n' +
//           '* *React:* Understand the concepts of functional components, hooks, state management, and lifecycle methods.\n' +
//           '* *Node.js:* Learn the basics of Node.js, including modules, I/O, and event handling.\n' +
//           '* *Express:* Familiarize yourself with routing, middleware, and error handling in Express.\n' +
//           '\n' +
//           '### Intermediate Skills\n' +
//           '\n' +
//           '* *React Advanced:* Explore advanced topics such as Redux, React Router, and asynchronous programming.\n' + 
//           '* *Node.js Advanced:* Understand concepts like Node.js event loop, concurrency, and database interactions.\n' +
//           '* *Express Advanced:* Implement authentication, authorization, and RESTful APIs using Express.\n' +
//           '\n' +
//           '### Mastery Skills\n' +
//           '\n' +
//           '* *MERN Stack Projects:* Build end-to-end applications using React, Express, Node.js, and MongoDB.\n' +     
//           '* *Full-Stack Development Best Practices:* Learn about code organization, testing, and deployment strategies.\n' +
//           '* *Continuous Integration and Deployment (CI/CD):* Implement automated processes for building, testing, and deploying your applications.\n' +
//           '\n' +
//           '### Resources\n' +
//           '\n' +
//           '* [React Documentation](https://reactjs.org/)\n' +
//           '* [Node.js Documentation](https://nodejs.org/docs/)\n' +
//           '* [Express.js Documentation](https://expressjs.com/en/4x/api.html)'
//       ]);

//       // Simulating setting response and navigating with manual input
//       setResponse(generatedAnswer); 
//       navigate('/generated-answer', { state: { generatedAnswer: generatedAnswer } });
//     } else {
//       alert('Please select the subtopics you know to customize your roadmap!');
//     }
//   };

//   const handleCheckboxChange = () => {
//     setLearnMoreChecked((prev) => !prev);
//   };

//   return (
//     <div className="customized-roadmap">
//       <h1>Customize Your Roadmap</h1>

//       <div>
//         <h3>Select Subtopics:</h3>
//         <div className="subtopics-container">
//           {topics.map((subtopic) => (
//             <button
//               key={subtopic}
//               className={`option-button ${selectedSubtopics.includes(subtopic) ? 'selected' : ''}`}
//               onClick={() => handleSubtopicChange(subtopic)}
//             >
//               {subtopic}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="tick-container">
//         <label>
//           Learn more technologies
//           <input
//             type="checkbox"
//             checked={learnMoreChecked}
//             onChange={handleCheckboxChange}
//           />
//         </label>
//       </div>

//       <div className="button-row">
//         <button className="start-button" onClick={handleNavigate}>Start Your Journey</button>
//       </div>

//       {response && (
//         <div className="response-container">
//           <h3>Response:</h3>
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomizedRoadmap;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomizedRoadmap.css';

function CustomizedRoadmap() {
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);
  const [response, setResponse] = useState('');
  const [learnMoreChecked, setLearnMoreChecked] = useState(false); // Added state for checkbox
  const topics = [
    'Computer Science', 'React', 'Vue', 'Express', 'Angular', 'JavaScript', 'Node.js', 'TypeScript', 'Python', 'SQL',
    'System Design', 'API Design', 'ASP.NET Core', 'Java', 'C++', 'Flutter', 'Spring Boot', 'Go Roadmap',
    'Rust', 'GraphQL', 'Design and Architecture', 'Design System', 'React Native', 'AWS', 'Ethical Hacking',
    'Docker', 'Kubernetes', 'MongoDB', 'SQL'
  ];

  const navigate = useNavigate();

  const handleSubtopicChange = (subtopic) => {
    setSelectedSubtopics((prevSubtopics) => 
      prevSubtopics.includes(subtopic)
        ? prevSubtopics.filter((st) => st !== subtopic)
        : [...prevSubtopics, subtopic]
    );
  };

  const handleNavigate = async () => {
    if (selectedSubtopics.length > 0) {
      const roadmap = { 
        subtopics: selectedSubtopics,
        learnMore: learnMoreChecked ? 1 : 0 
      };
      try {
        const response = await fetch('http://localhost:8000/api/v1/users/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(roadmap),
        });
        const customizedRoadmap = await response.json();
        console.log()
        setResponse(customizedRoadmap); 
        navigate('/generated-answer', { state: { generatedAnswer: customizedRoadmap } });
      } catch (error) {
        console.error('Error customizing roadmap:', error);
        setResponse('Failed to customize roadmap.');
      }
    } else {
      alert('Please select the subtopics you know to customize your roadmap!');
    }
  };

  const handleCheckboxChange = () => {
    setLearnMoreChecked((prev) => !prev);
  };

  const clearSelections = () => {
    setSelectedSubtopics([]);
    setLearnMoreChecked(false);
  };

  return (
    <div className="customized-roadmap">
      <h1>Customize Your Roadmap</h1>
      <button className="clear-button" onClick={clearSelections}>Clear All</button>
      <div>
        <h3>Select Subtopics:</h3>
        <div className="subtopics-container">
          {topics.map((subtopic) => (
            <button
              key={subtopic}
              className={`option-button ${selectedSubtopics.includes(subtopic) ? 'selected' : ''}`}
              onClick={() => handleSubtopicChange(subtopic)}
            >
              {subtopic}
            </button>
          ))}
        </div>
      </div>

      <div className="tick-container">
        <label>
          Learn more technologies
          <input
            type="checkbox"
            checked={learnMoreChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>

      <div className="button-row">
        <button className="start-button" onClick={handleNavigate}>Start Your Journey</button>
      </div>

      {response && (
        <div className="response-container">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default CustomizedRoadmap;
