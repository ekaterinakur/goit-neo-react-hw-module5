import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/moviesAPI';
import useLoading from '../../hooks/useLoading';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        startLoading(true);
        const result = await searchMovies(query);
        setMovies(result);
        finishLoading(false);
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [query, startLoading, finishLoading]);

  return (
    <div>
      <SearchBar />
      <MovieList isLoading={isLoading} isLoaded={isLoaded} movies={movies} />
    </div>
  );
};

export default MoviesPage;
