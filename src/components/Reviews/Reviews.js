import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'components/Services/Api';
import PropTypes from 'prop-types';
import { ReviewsCard, List, Item, Thumb, Error } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setMovieReviews)
      .catch(error => error.message);
  }, [movieId]);

  return (
    <ReviewsCard>
      <List>
        {movieReviews.length > 0 ? (
          movieReviews.map(({ author, content, created_at: date }) => (
            <Item key={author}>
              <Thumb>
                <b>Author: {author}</b>
                <p>Date: {new Date(date).toLocaleString()}</p>
              </Thumb>
              <p>{content}</p>
            </Item>
          ))
        ) : (
          <Error>We don't have any reviews for this movie</Error>
        )}
      </List>
    </ReviewsCard>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.object,
};

export default Reviews;
