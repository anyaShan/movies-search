import { useParams, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MainContainer } from 'components/MainContainer/MainContainer';
import { getMovieByID } from 'components/Services/Api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MovieInfoAditional } from 'components/MovieInfoAditional/MovieInfoAditional';
import { BackLink, Icon } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieByID(movieId)
      .then(setMovie)
      .catch(error => error.message);
  }, [movieId]);
  // ================================================
  // якщо Id це рядок, то може прийти з адресного рядка, потрібно перетворити у номер
  // useEffect(() => {
  //   getMovieByID(Number(movieId))
  //     .then(setMovie)
  //     .catch(error => error.message);
  // }, [movieId]);
  // ================================================
  // console.log(location.state.from);
  return (
    <MainContainer>
      <BackLink to={backLinkHref}>
        <Icon />
        Back to movies
      </BackLink>
      <MovieInfo movie={movie} />
      <MovieInfoAditional backToList={backLinkHref} />
    </MainContainer>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.object,
  location: PropTypes.object,
};

export default MovieDetails;
