import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = ({ restaurants, updateRestaurant }) => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [newImage, setNewImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const currentRestaurant = restaurants.find(r => r.id === parseInt(id));
    if (currentRestaurant) {
      setRestaurant(currentRestaurant);
      setRating(currentRestaurant.rating || 0);
    }
  }, [id, restaurants]);

  const handleAddImage = () => {
    if (newImage.trim()) {
      const updatedRestaurant = {
        ...restaurant,
        images: [...restaurant.images, newImage],
      };
      setRestaurant(updatedRestaurant);
      updateRestaurant(updatedRestaurant);
      setNewImage('');
    }
  };

  const handleRating = (newRating) => {
    const updatedRestaurant = {
      ...restaurant,
      rating: newRating,
    };
    setRestaurant(updatedRestaurant);
    updateRestaurant(updatedRestaurant);
    setRating(newRating);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % restaurant.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + restaurant.images.length) % restaurant.images.length);
  };

  if (!restaurant) {
    return <div>טוען...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <div className="relative w-full max-w-md mx-auto mb-4">
        {restaurant.images.length > 0 ? (
          <div className="relative">
            <img
              src={restaurant.images[currentImageIndex]}
              alt={`restaurant-${currentImageIndex}`}
              className="w-full h-64 object-cover rounded"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        ) : (
          <p>אין תמונות להציג</p>
        )}
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="הוסף קישור לתמונה חדשה"
          className="border p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleAddImage} className="bg-blue-500 text-white p-2 ml-2 rounded-lg shadow-lg">הוסף תמונה</button>
      </div>
      <p className="text-gray-700 mb-4">{restaurant.description}</p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
                className="hidden"
              />
              <svg
                className={`w-8 h-8 cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <path d="M12 .587l3.668 7.451 8.2 1.192-5.937 5.781 1.406 8.191L12 18.897l-7.338 3.865 1.406-8.191-5.937-5.781 8.2-1.192z"/>
              </svg>
            </label>
          );
        })}
      </div>
      <p>דירוג נוכחי: {rating}</p>
    </div>
  );
};

export default RestaurantDetails;
