// src/components/NewsCard.jsx
import '../styles/NewsCard.css';

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, image, description, url }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="news-card-arrow">
        &#x2198;
      </a>
    </div>
  );
};

export default NewsCard;