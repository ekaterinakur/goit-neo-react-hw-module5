import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/moviesAPI';
import useLoading from '../../hooks/useLoading';
import Loading from '../Loading/Loading';

import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();

  const [reviews, setReviews] = useState([]);

  const fetchData = async movieId => {
    startLoading(true);
    const result = await getMovieReviews(movieId);

    setReviews(result);
    finishLoading(false);
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  if (!isLoaded || isLoading) {
    return <Loading />;
  }

  if (isLoaded && !reviews?.length) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <h6 className={styles.title}>Author: {review.author}</h6>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
