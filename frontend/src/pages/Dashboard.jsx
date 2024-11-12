import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [userData, setUserData] = useState({
    name: '',
    qualification: '',
    currentlyLearning: '',
    recentlyPlayed: [],
  });

  useEffect(() => {
    // Fetch user data from API or state management
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user-data'); // Replace with your API endpoint
        const data = await response.json();
        setUserData({
          name: data.name,
          qualification: data.qualification,
          currentlyLearning: data.currentlyLearning,
          recentlyPlayed: data.recentlyPlayed || [],
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="dashboard">
      <div className="user-info">
        <h2>Welcome, {userData.name}!</h2>
        <p><strong>Qualification:</strong> {userData.qualification}</p>
        <p><strong>Currently Learning:</strong> {userData.currentlyLearning}</p>
      </div>

      <div className="recently-played">
        <h3>Recently Played Videos</h3>
        <ul>
          {userData.recentlyPlayed.map((video, index) => (
            <li key={index} className="video-item">
              <h4>{video.title}</h4>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="watch-link">
                Watch Again
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
