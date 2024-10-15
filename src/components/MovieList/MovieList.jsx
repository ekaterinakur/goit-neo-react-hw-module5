import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

import styles from './MovieList.module.css';

const MovieList = ({ isLoading, isLoaded, movies = [] }) => {
  if (!isLoaded || isLoading) return <Loading />;

  if (isLoaded && !movies.length) return <p>No movies.</p>;

  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
