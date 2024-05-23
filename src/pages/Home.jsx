import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

const Home = ({ restaurants }) => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
