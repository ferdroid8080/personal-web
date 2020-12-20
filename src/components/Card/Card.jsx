import React from 'react';

import './Card.css';

function Card({ item }) {
  return (
    <div className="Card">
      <div className="Card--Inner--Image">
        <img src={item.imageUrl} alt={item.title} width="450" />
      </div>
      <div className="Card--Header">
        <h2>{item.title}</h2>
        <ul className="Card--Icons--Actions">
          <li>
            <a href={item.projectUrl} title={item.projectUrl}>github repo</a>
          </li>
          <li>
            <a href={item.websiteUrl} title={item.websiteUrl}>live demo</a>
          </li>
        </ul>
      </div>
      <div className="Card--Body text-center">
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
