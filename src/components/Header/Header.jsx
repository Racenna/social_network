import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  logout,
  loginSelector,
  isAuthSelector,
} from '../../redux/authReducer/index';
import logo from './../../assets/svg/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);
  const login = useSelector(loginSelector);

  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <div className={styles.login_block}>
        {isAuth ? (
          <div>
            <span>{login}</span>
            <NavLink to='/login'>
              <button onClick={() => dispatch(logout())}>Log out</button>
            </NavLink>
          </div>
        ) : (
          <NavLink to='/login'>
            <button>Login</button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
