import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    
  };

  return (
    <header className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white dark:text-gray-100 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Movie.Info</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-400">Home</Link>
          <Link to="/popular" className="mr-5 hover:text-gray-400">Popular</Link>
          <Link to="/upcoming" className="mr-5 hover:text-gray-400">Upcoming</Link>
          <Link to="/top-rated" className="mr-5 hover:text-gray-400">Top Rated</Link>
        </nav>

        <button
          className="ml-4 text-white dark:text-gray-100 focus:outline-none"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m8.66-9.66h-1m-16 0h-1m12.07 6.07l-.71-.71m-8.34 0l-.71.71m12.07-12.07l-.71-.71m-8.34 0l-.71.71m8.34 8.34a4 4 0 1 1-5.66-5.66 4 4 0 0 1 5.66 5.66z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m8.66-9.66h-1m-16 0h-1m12.07 6.07l-.71-.71m-8.34 0l-.71.71m12.07-12.07l-.71-.71m-8.34 0l-.71.71m12.07 12.07a4 4 0 1 1-5.66-5.66 4 4 0 0 1 5.66 5.66z"
              ></path>
            </svg>
          )}
        </button>

        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="rounded bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 text-white dark:text-gray-100 px-4 py-2"
          />
          <button type="submit" className="ml-2 text-white bg-indigo-500 dark:bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};
