// src/hooks/useFetchMovies.js

import { useState, useEffect } from 'react';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../services/api';

export const useFetchMovies = (type) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      let data;
      switch (type) {
        case 'popular':
          data = await fetchPopularMovies();
          break;
        case 'topRated':
          data = await fetchTopRatedMovies();
          break;
        case 'upcoming':
          data = await fetchUpcomingMovies();
          break;
        default:
          data = [];
      }
      setMovies(data);
    };

    loadMovies();
  }, [type]);

  return movies;
};
