// src/pages/Home.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding: 2rem;
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const CTAButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border-radius: 0.375rem;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FeaturedSection = styled.section`
  margin: 2rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const MovieCard = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const MovieTitle = styled.h3`
  text-align: center;
  margin-top: 0.5rem;
`;

export const AboutSection = styled.section`
  margin: 2rem 0;
`;

export const AboutTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const CTASection = styled.section`
  text-align: center;
  margin: 2rem 0;
`;

export const SearchSection = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
