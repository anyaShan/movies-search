import PropTypes from 'prop-types';
import {
  MovieCard,
  MoviePoster,
  InfoCard,
  InfoThumb,
  GenresList,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const {
    title,
    poster_path: path,
    release_date: year,
    vote_average: score,
    overview,
    genres,
  } = movie;

  return (
    <MovieCard>
      <MoviePoster
        src={
          path
            ? `https://image.tmdb.org/t/p/w300${path}`
            : `https://i.pinimg.com/originals/7b/3f/ba/7b3fba069b7942021bf680e2d3170bf8.jpg`
        }
        alt={`${title}`}
      />
      <InfoCard>
        <h2>
          {title} {year ? `(${year.slice(0, 4)})` : null}
        </h2>
        <InfoThumb>
          <p>User Score: {score && (score * 10).toFixed(2)}%</p>

          {overview ? (
            <div>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          ) : null}

          {genres ? (
            <div>
              <h3>Genres</h3>
              <GenresList>
                {genres
                  ? genres.map(({ id, name }) => <li key={id}>{name}</li>)
                  : null}
              </GenresList>
            </div>
          ) : null}
        </InfoThumb>
      </InfoCard>
    </MovieCard>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
