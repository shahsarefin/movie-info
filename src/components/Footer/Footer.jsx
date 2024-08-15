import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bgGray800};
  color: ${({ theme }) => theme.textWhite};
  padding: 1.5rem 0; /* py-6 */
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: ${({ theme }) => theme.textGray400};
  margin-bottom: 1rem;
`;

const FooterNav = styled.nav`
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.875rem; /* text-sm */
  color: ${({ theme }) => theme.textGray400};
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: ${({ theme }) => theme.textWhite};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterText>
          &copy; {new Date().getFullYear()} Movie.Info. All rights reserved.
        </FooterText>
        <FooterNav>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </FooterNav>
      </FooterInner>
    </FooterContainer>
  );
};
