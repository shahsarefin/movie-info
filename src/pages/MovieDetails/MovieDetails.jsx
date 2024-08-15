import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import {
  Container,
  MovieTitle,
  MovieOverview,
  MoviePoster,
  MovieDetailsContainer,
  MovieInfoWrapper,
  MovieInfoTable,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    loadMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <MovieDetailsContainer>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <MovieInfoWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>

          <MovieInfoTable>
            <tbody>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{movie.vote_average}</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>{movie.genres.map(genre => genre.name).join(', ')}</td>
              </tr>
              <tr>
                <th>Runtime</th>
                <td>{movie.runtime} minutes</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>${movie.budget.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>${movie.revenue.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Production Companies</th>
                <td>{movie.production_companies.map(company => company.name).join(', ')}</td>
              </tr>
            </tbody>
          </MovieInfoTable>
        </MovieInfoWrapper>
      </MovieDetailsContainer>
    </Container>
  );
};
