import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      navigate(`?query=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        autoFocus
        className={styles.searchInput}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
};

export default SearchBar;
