// src/pages/PageNotFound/PageNotFound.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #a0aec0;
`;

export const HomeLink = styled(Link)`
  margin-top: 2rem;
  background-color: #3182ce;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c5282;
  }
`;

export const Animation = styled.div`
  margin-top: 2rem;
  width: 300px;
  height: 300px;
  background: url('/assets/images/path-to-your-404-animation.gif') center center no-repeat;
  background-size: contain;
`;
