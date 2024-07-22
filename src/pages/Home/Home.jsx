import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContent,
  Title,
  Main,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Grid,
  Card,
  CardTitle,
  AboutSection,
  AboutTitle,
  AboutText,
  Footer,
} from './Home.styled';

export const Home = () => {
  return (
    <>
      <Header>
        <HeaderContent>
          <Title>Movie.Info</Title>
        </HeaderContent>
      </Header>
      <Main>
        <HeroSection>
          <HeroTitle>Welcome to Movie.Info</HeroTitle>
          <HeroSubtitle>Your ultimate destination for movie information</HeroSubtitle>
        </HeroSection>

        <Grid>
          <Card to="/popular" bg="#e53e3e" hoverBg="#c53030">
            <CardTitle>Popular Movies</CardTitle>
            <p>Discover what's trending in the world of cinema</p>
          </Card>
          <Card to="/top-rated" bg="#3182ce" hoverBg="#2c5282">
            <CardTitle>Top Rated Movies</CardTitle>
            <p>Explore critically acclaimed films of all time</p>
          </Card>
          <Card to="/upcoming" bg="#38a169" hoverBg="#2f855a">
            <CardTitle>Upcoming Movies</CardTitle>
            <p>Get a sneak peek at future blockbusters</p>
          </Card>
          <Card to="/all-movies" bg="#d69e2e" hoverBg="#b7791f">
            <CardTitle>All Movies</CardTitle>
            <p>Browse all available movies</p>
          </Card>
        </Grid>

        <AboutSection>
          <AboutTitle>About Movie.Info</AboutTitle>
          <AboutText>
            Movie.Info is your go-to source for all things cinema. Whether you're looking for the latest box office hits, 
            critically acclaimed masterpieces, or upcoming releases, we've got you covered. Dive in and explore the 
            wonderful world of movies!
          </AboutText>
        </AboutSection>
      </Main>
      <Footer>
        <p>&copy; 2023 Movie.Info. All rights reserved.</p>
      </Footer>
    </>
  );
};
