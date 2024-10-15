import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
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
