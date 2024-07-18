import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex flex-col items-center">
      <p className="text-sm text-gray-400 mb-4">
        &copy; {new Date().getFullYear()} Movie.Info. All rights reserved.
      </p>
      <nav className="mb-4">
        <Link to="/about" className="text-sm text-gray-400 hover:text-white mr-4">About</Link>
        <Link to="/contact" className="text-sm text-gray-400 hover:text-white mr-4">Contact</Link>
        <Link to="/privacy" className="text-sm text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
        <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
      </nav>
    </div>
  </footer>
  );
};

