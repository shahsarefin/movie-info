// src/pages/Search.styled.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
  flex: 1;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h3 {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export const NoResults = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.25rem;
  color: #666;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;
