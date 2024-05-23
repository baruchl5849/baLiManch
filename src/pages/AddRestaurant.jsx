import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRestaurant = ({ addRestaurant }) => {
  const [restaurant, setRestaurant] = useState({
    id: Date.now(),
    name: '',
    city: '',
    price: '',
    main_image: '',
    cuisine: '',
    images: [],
    description: '',
    rating: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevRestaurant) => ({ ...prevRestaurant, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(restaurant);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">הוסף מסעדה</h2>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
        placeholder="שם"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="city"
        value={restaurant.city}
        onChange={handleChange}
        placeholder="עיר"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="price"
        value={restaurant.price}
        onChange={handleChange}
        placeholder="מחיר"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="main_image"
        value={restaurant.main_image}
        onChange={handleChange}
        placeholder="URL תמונה ראשית"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="cuisine"
        value={restaurant.cuisine}
        onChange={handleChange}
        placeholder="סוג מטבח"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="description"
        value={restaurant.description}
        onChange={handleChange}
        placeholder="תיאור"
        className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg shadow-lg">הוסף מסעדה</button>
    </form>
  );
};

export default AddRestaurant;