// src/pages/Upcoming/Upcoming.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, MoviesGrid } from './Upcoming.styled';
import { Card } from '../../components/Card/Card';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export const Upcoming = () => {
  const movies = useFetchMovies('upcoming');

  return (
    <Container>
      <SectionTitle>Upcoming Movies</SectionTitle>
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
