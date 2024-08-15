// src/components/Card/Card.jsx
import React from 'react';
import { CardContainer } from './Card.styled';

export const Card = ({ movie }) => {
  return (
    <CardContainer>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </CardContainer>
  );
};
