import React from 'react'
import { useEffect, useState } from 'react' 
import { Card } from '../components/Card'

export const Movies = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a81bbc7e363ccc00aca15727356d455c');
        const popularData = await popularResponse.json();

        const topRatedResponse = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a81bbc7e363ccc00aca15727356d455c');
        const topRatedData = await topRatedResponse.json();

        const upcomingResponse = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=a81bbc7e363ccc00aca15727356d455c');
        const upcomingData = await upcomingResponse.json();

        setMovies({
          popular: popularData.results,
          topRated: topRatedData.results,
          upcoming: upcomingData.results,
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.popular.map(movie => (
          <div key={movie.id} className="bg-gray-800 text-white p-4 rounded">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 rounded"/>
            <h2 className="text-lg font-bold">{movie.title}</h2>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">Top Rated Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.topRated.map(movie => (
          <div key={movie.id} className="bg-gray-800 text-white p-4 rounded">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 rounded"/>
            <h2 className="text-lg font-bold">{movie.title}</h2>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">Upcoming Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.upcoming.map(movie => (
          <div key={movie.id} className="bg-gray-800 text-white p-4 rounded">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 rounded"/>
            <h2 className="text-lg font-bold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
