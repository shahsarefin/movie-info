// src/pages/Search/Search.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchResults } from '../../services/api';
import { Container, SearchInput, SearchButton, MoviesGrid } from './Search.styled';
import { Card } from '../../components/Card/Card';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await fetchSearchResults(query);
    setResults(data);
  };

  return (
    <Container>
      <div>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
      <MoviesGrid>
        {results.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </MoviesGrid>
    </Container>
  );
};
