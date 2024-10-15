import { apiClient } from './client';

export const getTrendingMovies = async () => {
  try {
    const response = await apiClient.get('/trending/movie/day');
    return response.data.results;
  } catch (e) {
    return [];
  }
};

export const searchMovies = async query => {
  try {
    const response = await apiClient.get('/search/movie', {
      params: { query, include_adult: false, language: 'en-US', page: 1 },
    });
    return response.data.results;
  } catch (e) {
    return [];
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (e) {
    return [];
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (e) {
    return [];
  }
};
