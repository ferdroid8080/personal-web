import React from 'react';

import './Card.css';

function Card({ item }) {
  return (
    <a href={item.websiteUrl} title={item.label} className="Card">
      <div className="Card--Inner--Image">
        <img src={item.imageUrl} alt={item.title} width="450" />
      </div>
      <div className="Card--Header">
        <h2>{item.title}</h2>
      </div>
      <div className="Card--Body text-center">
        <p>{item.description}</p>
      </div>
    </a>
  );
}

export default Card;
