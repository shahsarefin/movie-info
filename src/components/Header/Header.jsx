import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.bgGray800};
  color: ${({ theme }) => theme.textWhite};
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

const TitleLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 1.25rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.hoverTextGray400};
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <TitleLink to="/">Movie.Info</TitleLink>

        <Nav>
          <NavLink to="/popular">Popular</NavLink>
          <NavLink to="/top-rated">Top Rated</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};
