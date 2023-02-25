import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
// import { Home } from '../pages/Home/Home';
const Movies = lazy(() => import('../pages/Movies/Movies'));
// import { Movies } from '../pages/Movies/Movies';
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
const Cast = lazy(() => import('./Cast/Cast'));
// import { Cast } from 'components/Cast/Cast';
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
