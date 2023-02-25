import { useState, useEffect } from 'react';
import { apiTrending } from 'components/Services/Api';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [moviesTrendingList, setTrendingList] = useState([]);

  useEffect(() => {
    apiTrending()
      .then(setTrendingList)
      .catch(error => error.message);
  }, []);

  return (
    <MainContainer>
      <Title>Tranding today</Title>
      <MoviesList moviesList={moviesTrendingList} />
    </MainContainer>
  );
};

export default Home;
