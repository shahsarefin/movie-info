import { useState, useEffect } from 'react';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../services/api';

const cache = {}; // Simple in-memory cache

export const useFetchMovies = (type) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      if (cache[type]) {
        setMovies(cache[type]);
      } else {
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
        cache[type] = data; 
        setMovies(data);
      }
    };

    loadMovies();
  }, [type]);

  return movies;
};
