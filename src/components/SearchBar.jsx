import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      className="border p-2 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="...חפש לפי עיר"
    />
  );
};

export default SearchBar;
