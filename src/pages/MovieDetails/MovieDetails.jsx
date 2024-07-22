// src/pages/MovieDetails/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import { Container, MovieTitle, MovieOverview, MoviePoster, MovieDetailsContainer } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    loadMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <MovieDetailsContainer>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <MovieOverview>{movie.overview}</MovieOverview>
        </div>
      </MovieDetailsContainer>
    </Container>
  );
};
