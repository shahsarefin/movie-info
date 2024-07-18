// src/routes/AllRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Movies, Movie, Search, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
