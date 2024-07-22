// src/pages/TopRated/TopRated.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, MoviesGrid } from './TopRated.styled';
import { Card } from '../../components/Card/Card';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export const TopRated = () => {
  const movies = useFetchMovies('topRated');

  return (
    <Container>
      <SectionTitle>Top Rated Movies</SectionTitle>
      <MoviesGrid>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </MoviesGrid>
    </Container>
  );
};
