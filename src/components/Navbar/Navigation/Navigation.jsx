import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentPageSelector } from '../../../redux/usersReducer';

const Navigation = () => {
  const currentPage = useSelector(getCurrentPageSelector);

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
        <NavLink
          to={`/users?page=${currentPage}`}
          activeClassName={styles.active}
        >
          Find users
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
