import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authReducer';
import logo from './../../assets/svg/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

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
