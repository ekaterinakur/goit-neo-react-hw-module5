import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const getLinkclassName = ({ isActive }) => (isActive ? styles.activeLink : styles.link);

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink to="/" className={getLinkclassName}>Home</NavLink>
    <NavLink to="/movies"className={getLinkclassName}>Movies</NavLink>
  </nav>
);

export default Navigation;
