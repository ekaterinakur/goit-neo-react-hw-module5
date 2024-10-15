import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/moviesAPI';
import MovieList from '../../components/MovieList/MovieList';

import styles from './HomePage.module.css';
import useLoading from '../../hooks/useLoading';

const HomePage = () => {
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();

  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    startLoading(true);
    const result = await getTrendingMovies();

    setMovies(result);
    finishLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList isLoading={isLoading} isLoaded={isLoaded} movies={movies} />
    </div>
  );
};

export default HomePage;
