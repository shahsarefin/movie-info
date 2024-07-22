// src/pages/AllMovies/AllMovies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, MoviesGrid } from './AllMovies.styled';
import { Card } from '../../components/Card/Card';
import { useFetchMovies } from '../../hooks/useFetchMovies';

export const AllMovies = () => {
  const popularMovies = useFetchMovies('popular');
  const topRatedMovies = useFetchMovies('topRated');
  const upcomingMovies = useFetchMovies('upcoming');

  return (
    <Container>
      <SectionTitle>Popular Movies</SectionTitle>
      <MoviesGrid>
        {popularMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </MoviesGrid>

      <SectionTitle>Top Rated Movies</SectionTitle>
      <MoviesGrid>
        {topRatedMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </MoviesGrid>

      <SectionTitle>Upcoming Movies</SectionTitle>
      <MoviesGrid>
        {upcomingMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </MoviesGrid>
    </Container>
  );
};
