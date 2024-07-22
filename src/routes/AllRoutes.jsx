// src/routes/AllRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Popular, TopRated, Upcoming, AllMovies, PageNotFound, MovieDetails, Search } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/all-movies" element={<AllMovies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
