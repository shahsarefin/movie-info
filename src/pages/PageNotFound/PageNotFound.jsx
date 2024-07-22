// src/pages/PageNotFound/PageNotFound.jsx
import React from 'react';
import { Container, Title, Subtitle, HomeLink, Animation } from './PageNotFound.styled';

export const PageNotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Oops! The page you're looking for doesn't exist.</Subtitle>
      <HomeLink to="/">Go Back Home</HomeLink>
      <Animation />
    </Container>
  );
};
