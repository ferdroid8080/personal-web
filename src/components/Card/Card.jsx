import React from 'react';

import './Card.css';

function Card({ item })
{
  return (
    <a href={item.projectUrl} title={item.label}>
      <div className="Card">
        <div className="Card--Inner--Image">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="Card--Header">
          <h2>{item.title}</h2>
        </div>
        <div className="Card--Body">
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  )
}

export default Card;
