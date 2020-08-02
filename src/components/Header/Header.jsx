import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/svg/logo.svg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <div className={styles.login_block}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
            <NavLink to='/login'>
              <button onClick={props.logout}>Log out</button>
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
