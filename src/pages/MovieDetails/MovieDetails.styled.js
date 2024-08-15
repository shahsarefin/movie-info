import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bgColor || '#f0f2f5'};
  min-height: 100vh;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cardBg || '#ffffff'};
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primaryColor || '#333333'};
`;

export const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textColor || '#333333'};
  background-color: #e0f7fa; /* Light sky blue background */
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1.5rem;
`;

export const MovieInfoTable = styled.table`
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.tableBgColor || '#ffffff'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 1rem;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.primaryColor || '#333333'};
    color: ${({ theme }) => theme.tableHeaderTextColor || '#ffffff'};
    font-weight: bold;
  }

  td {
    background-color: ${({ theme }) => theme.tableRowBgColor || '#f9f9f9'};
    color: ${({ theme }) => theme.textColor || '#333333'};
    border-bottom: 1px solid ${({ theme }) => theme.tableRowBorderColor || '#dddddd'};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
