import React from 'react';
import { Link } from 'react-router-dom';

const ManageRestaurants = ({ restaurants, updateRestaurant, deleteRestaurant }) => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <Link to="/add-restaurant" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">הוסף מסעדה</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p className="text-gray-700">{restaurant.city}</p>
            <p className="text-gray-700">מחיר: ₪{restaurant.price}</p>
            <p className="text-gray-700">סוג מטבח: {restaurant.cuisine}</p>
            <div className="flex justify-between mt-4">
              <button onClick={() => deleteRestaurant(restaurant.id)} className="bg-red-500 text-white p-2 rounded-lg shadow-lg">מחק</button>
              <Link to={`/edit-restaurant/${restaurant.id}`} className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">ערוך</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRestaurants;
