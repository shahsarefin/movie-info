// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Movie.Info</span>
        </Link>

        

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-400">Home</Link>
          <Link to="/popular" className="mr-5 hover:text-gray-400">Popular</Link>
          <Link to="/upcoming" className="mr-5 hover:text-gray-400">Upcoming</Link>
          <Link to="/top-rated" className="mr-5 hover:text-gray-400">Top Rated</Link>
        </nav>

        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="rounded bg-gray-700 border border-gray-600 text-white px-4 py-2"
          />
          <button type="submit" className="ml-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};
