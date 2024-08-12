

import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('Search...');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFocus = () => {
    if (searchText === 'Search...') {
      setSearchText('');
    }
  };

  const handleBlur = () => {
    if (searchText === '') {
      setSearchText('Search...');
    }
  };

  return (
    <input
      className="h-10 w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
      type="text"
      value={searchText}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default SearchBar;

