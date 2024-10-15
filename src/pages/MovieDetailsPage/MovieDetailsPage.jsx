import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from '../../api/moviesAPI';
import { getImageUrl } from '../../utils';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/Loading/Loading';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();

  const [movie, setMovie] = useState(null);

  const fetchData = async movieId => {
    startLoading(true);
    const result = await getMovieDetails(movieId);

    setMovie(result);
    finishLoading(false);
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  if (!isLoaded || isLoading) return <Loading />;

  if (isLoaded && !movie) return <p>No info.</p>;

  return (
    <div>
      <button
        className={styles.backButton}
        onClick={() => navigate(location?.state?.from || '/movies')}
      >
        &#8592; Go back
      </button>
      <div className={styles.detailsWrapper}>
        <div>
          {movie.poster_path && (
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className={styles.poster}
            />
          )}
        </div>
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.text}>User Score: {movie.popularity}%</p>
          <h6 className={styles.subtitle}>Overview</h6>
          <p className={styles.text}>{movie.overview}</p>
          <h6 className={styles.subtitle}>Genres</h6>
          <p className={styles.text}>
            {movie.genres?.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <hr />

      <h6 className={styles.subtitle}>Additional Information</h6>
      <nav>
        <Link to="cast" state={location.state}>
          Cast
        </Link>{' '}
        |{' '}
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </nav>

      <hr />

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
