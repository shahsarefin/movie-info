import React, { useState } from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { Link } from 'react-router-dom';
import {
  Main,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  FeaturedSection,
  SectionTitle,
  MovieGrid,
  MovieCard,
  MoviePoster,
  MovieTitle,
  AboutSection,
  AboutTitle,
  AboutText,
  CTASection,
  CTAButton,
} from './Home.styled';
import { Search } from '../Search/Search';

export const Home = () => {
  const popularMovies = useFetchMovies('popular').slice(0, 5);
  const topRatedMovies = useFetchMovies('topRated').slice(0, 5);
  const upcomingMovies = useFetchMovies('upcoming').slice(0, 5);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Main>
      <HeroSection>
        <HeroTitle>Discover Your Next Favorite Movie</HeroTitle>
        <HeroSubtitle>
          Explore thousands of films from classics to the latest releases
        </HeroSubtitle>
      </HeroSection>

      <Search onSearch={setSearchResults} />

      {searchResults.length > 0 && (
        <FeaturedSection>
          <SectionTitle>Search Results</SectionTitle>
          <MovieGrid>
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                  }}
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieCard>
            ))}
          </MovieGrid>
        </FeaturedSection>
      )}

      <FeaturedSection>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieGrid>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                }}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          ))}
        </MovieGrid>
      </FeaturedSection>

      <FeaturedSection>
        <SectionTitle>Top Rated Movies</SectionTitle>
        <MovieGrid>
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                }}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          ))}
        </MovieGrid>
      </FeaturedSection>

      <FeaturedSection>
        <SectionTitle>Upcoming Movies</SectionTitle>
        <MovieGrid>
          {upcomingMovies.map((movie) => (
            <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                }}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          ))}
        </MovieGrid>
      </FeaturedSection>

      <AboutSection>
        <AboutTitle>About Movie.Info</AboutTitle>
        <AboutText>
          Movie.Info is your ultimate destination for all things cinema. We
          provide comprehensive information about movies, from classics to the
          latest releases. Whether you're a casual viewer or a film enthusiast,
          our platform offers a rich database of movies, complete with ratings,
          reviews, and recommendations.
        </AboutText>
      </AboutSection>

      <CTASection>
        <HeroTitle>Ready to dive into the world of movies?</HeroTitle>
        <CTAButton as={Link} to="/popular">
          Browse Popular Movies
        </CTAButton>
      </CTASection>
    </Main>
  );
};
