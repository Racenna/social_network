import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authReducer';
import { isAuthSelector, loginSelector } from '../../selectors/headerSelectors';
import logo from './../../assets/svg/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  const isAuth = useSelector((state) => isAuthSelector(state));
  const login = useSelector((state) => loginSelector(state));

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
