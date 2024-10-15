import { useState, useCallback } from 'react';

function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setIsLoaded(false);
  }, []);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(true);
  }, []);

  const resetLoading = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(false);
  }, []);

  return { isLoading, isLoaded, startLoading, finishLoading, resetLoading };
}

export default useLoading;
