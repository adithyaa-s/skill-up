// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import '../styles/HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [randomIndices, setRandomIndices] = useState([]);

  const getRandomIndices = (num, max) => {
    const indices = new Set();
    while (indices.size < num) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

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
