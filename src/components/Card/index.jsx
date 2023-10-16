import React from 'react';
import './Card.css'; // Импорт стилей

const Card = ({ title, description,  imageUrl, onButtonClick }) => {
  return (
    <div className="compact-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={onButtonClick} className="buy-button">Смотреть</button>
      </div>
    </div>
  );
};

export default Card;
