import React, { useState } from 'react';
import { searchMovies } from '../../api/moviesAPI';
import useLoading from '../../hooks/useLoading';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();

  const [movies, setMovies] = useState([]);

  const handleSearch = async query => {
    startLoading(true);
    const result = await searchMovies(query);

    setMovies(result);
    finishLoading(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <MovieList isLoading={isLoading} isLoaded={isLoaded} movies={movies} />
    </div>
  );
};

export default MoviesPage;
