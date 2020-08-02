import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' activeClassName={styles.active}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/musics' activeClassName={styles.active}>
          Musics
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/settings' activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/users' activeClassName={styles.active}>
          Find users
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
