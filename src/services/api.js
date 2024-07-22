// src/services/api.js

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const fetchMovies = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchPopularMovies = () => fetchMovies('movie/popular');
export const fetchTopRatedMovies = () => fetchMovies('movie/top_rated');
export const fetchUpcomingMovies = () => fetchMovies('movie/upcoming');

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchSearchResults = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};
