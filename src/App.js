// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import AddRestaurant from './pages/AddRestaurant';
import ManageRestaurants from './pages/ManageRestaurants';
import EditRestaurant from './pages/EditRestaurant'; // ודא שאתה מייבא את EditRestaurant
import Navbar from './components/Navbar';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const initialRestaurants = [
      {
        id: 1,
        name: 'מסעדת הטעמים',
        city: 'תל אביב',
        price: 100,
        main_image: 'https://via.placeholder.com/150',
        cuisine: 'ישראלי',
        description: 'מסעדה משפחתית עם טעמים ביתיים.',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        rating: 4.5,
      },
      {
        id: 2,
        name: 'בית השף',
        city: 'ירושלים',
        price: 150,
        main_image: 'https://via.placeholder.com/150',
        cuisine: 'צרפתי',
        description: 'חווית אוכל יוקרתית עם מנות גורמה.',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        rating: 4.7,
      },
      // מסעדות נוספות...
    ];

    const savedRestaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    if (savedRestaurants.length === 0) {
      localStorage.setItem('restaurants', JSON.stringify(initialRestaurants));
      setRestaurants(initialRestaurants);
    } else {
      setRestaurants(savedRestaurants);
    }
  }, []);

  const addRestaurant = (restaurant) => {
    const updatedRestaurants = [...restaurants, restaurant];
    setRestaurants(updatedRestaurants);
    localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
  };

  const updateRestaurant = (updatedRestaurant) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
    );
    setRestaurants(updatedRestaurants);
    localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
  };

  const deleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
    localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home restaurants={restaurants} />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} updateRestaurant={updateRestaurant} />} />
          <Route path="/add-restaurant" element={<AddRestaurant addRestaurant={addRestaurant} />} />
          <Route path="/manage-restaurants" element={<ManageRestaurants
            restaurants={restaurants}
            updateRestaurant={updateRestaurant}
            deleteRestaurant={deleteRestaurant}
          />} />
          <Route path="/edit-restaurant/:id" element={<EditRestaurant updateRestaurant={updateRestaurant} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
