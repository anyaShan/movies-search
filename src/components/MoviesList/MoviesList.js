import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <div>
      <List>
        {moviesList.map(({ id, title }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </Item>
        ))}
      </List>
    </div>
  );
};

MoviesList.propTypes = {
  list: PropTypes.shape({
    moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    state: PropTypes.object,
  }),
};
