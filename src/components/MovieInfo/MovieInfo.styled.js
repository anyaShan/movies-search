import styled from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 3px solid rgb(52, 162, 212);
`;

export const MoviePoster = styled.img`
  display: block;
  border-radius: 15px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const InfoCard = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: 1.2;
`;

export const InfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  h3 {
    margin-bottom: 15px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    display: flex;
    align-items: center;
    ::before {
      display: flex;
      margin-right: 10px;
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: grey;
    }
  }
`;
