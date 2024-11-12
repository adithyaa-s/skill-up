import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [randomIndices, setRandomIndices] = useState([]);
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const navigate = useNavigate(); // Used for navigation after timeout

  const getRandomIndices = (num, max) => {
    const indices = new Set();
    while (indices.size < num) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

  const handleUserActivity = () => {
    setLastActiveTime(Date.now()); // Reset last active time on user activity
  };

  useEffect(() => {
    // Add event listeners for user activity (mouse move, key press)
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    // Check idle time every second
    const interval = setInterval(() => {
      const idleTime = Date.now() - lastActiveTime;
      if (idleTime > 1800000) { 
        alert('Session timed out. Please log in again.');
        navigate('/signin'); // Redirect to Sign In page
      }
    }, 1000); 

    return () => {
      // Cleanup listeners on component unmount
      clearInterval(interval);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, [lastActiveTime, navigate]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=Tech+Jobs&apiKey=49545ba35485411285f20882f4650bd9');
        const articles = response.data.articles.filter(article => 
          article.title !== '[Removed]' &&
          article.description !== '[Removed]' &&
          article.author !== null &&
          article.url !== null &&
          article.urlToImage !== null &&
          article.publishedAt !== '1970-01-01T00:00:00Z'
        );
        setArticles(articles);
        setRandomIndices(getRandomIndices(12, articles.length));
      } catch (error) {
        console.error("Error fetching the articles:", error);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="home-page">
      {randomIndices.map(index => (
        <NewsCard 
          key={index}
          title={articles[index]?.title}
          image={articles[index]?.urlToImage || 'https://via.placeholder.com/150'}
          description={articles[index]?.description}
          url={articles[index]?.url}
        />
      ))}
    </div>
  );
};

export default HomePage;
