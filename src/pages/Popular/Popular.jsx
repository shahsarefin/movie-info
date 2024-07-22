// src/pages/Popular/Popular.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, MoviesGrid } from './Popular.styled';
import { Card } from '../../components/Card/Card';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export const Popular = () => {
  const movies = useFetchMovies('popular');

  return (
    <Container>
      <SectionTitle>Popular Movies</SectionTitle>
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
