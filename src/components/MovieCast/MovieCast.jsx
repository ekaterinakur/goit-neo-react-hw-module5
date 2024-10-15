import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/moviesAPI';
import { getImageUrl } from '../../utils';
import useLoading from '../../hooks/useLoading';
import Loading from '../Loading/Loading';

import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const { isLoading, isLoaded, startLoading, finishLoading } = useLoading();

  const [cast, setCast] = useState([]);

  const fetchData = async movieId => {
    startLoading(true);
    const result = await getMovieCredits(movieId);

    setCast(result);
    finishLoading(false);
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  if (!isLoaded || isLoading) {
    return <Loading />;
  }

  if (isLoaded && !cast?.length) {
    return <p>We don't have any cast for this movie</p>;
  }

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.cast_id} className={styles.actorCard}>
          {actor.profile_path && (
            <img
              width={100}
              src={getImageUrl(actor.profile_path)}
              alt={actor.name}
              className={styles.actorImage}
            />
          )}
          <p>
            {actor.name} as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
