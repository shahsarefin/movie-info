import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { fetchSearchResults } from '../../services/api';
import {
  Container,
  SearchInput,
  SearchButton,
  MoviesGrid,
  NoResults,
  ErrorMessage,
} from './Search.styled';

export const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { query: urlQuery } = queryString.parse(location.search);

    if (urlQuery) {
      setQuery(urlQuery);
      handleSearch(urlQuery);
    }
  }, [location.search]);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchSearchResults(searchQuery);
      setResults(data);
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const params = queryString.stringify({ query: query.trim() });
      // Update the URL with the new query string
      window.history.pushState(null, '', `/search?${params}`);
      // Trigger the search with the current query
      handleSearch(query.trim());
    }
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <SearchButton type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </SearchButton>
      </form>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!isLoading && results.length === 0 && query && (
        <NoResults>No results found for "{query}"</NoResults>
      )}

      <MoviesGrid>
        {results.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
              }}
            />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </MoviesGrid>
    </Container>
  );
};
