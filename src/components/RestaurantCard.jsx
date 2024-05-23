import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="card block">
      <img src={restaurant.main_image} alt={restaurant.name} className="img" />
      <div className="name-card">
        <h2 className="name">{restaurant.name}</h2>
        <div className="details">
          <span>{restaurant.city}</span>
          <span>₪{restaurant.price}</span>
          <span>{restaurant.cuisine}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
