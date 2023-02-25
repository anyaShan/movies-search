import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import {
  AditionalCard,
  List,
  Item,
  AditionLink,
} from './MovieInfoAditional.styled';

export const MovieInfoAditional = ({ backToList }) => {
  return (
    <AditionalCard>
      <h3>Aditional information</h3>
      <List>
        <Item>
          <AditionLink to="cast" state={{ from: backToList }}>
            Cast
          </AditionLink>
        </Item>
        <Item>
          <AditionLink to="reviews" state={{ from: backToList }}>
            Reviews
          </AditionLink>
        </Item>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AditionalCard>
  );
};

MovieInfoAditional.propTypes = {
  backToList: PropTypes.object,
};
