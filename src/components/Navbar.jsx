import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold"> 'באלי מאנצ </div>
        <div>
          <Link to="/" className="text-white mr-8 hover:text-yellow-300">עמוד הבית</Link>
          <Link to="/add-restaurant" className="text-white mr-8 hover:text-yellow-300">הוסף מסעדה</Link>
          <Link to="/manage-restaurants" className="text-white mr-8 hover:text-yellow-300">ניהול מסעדות</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
