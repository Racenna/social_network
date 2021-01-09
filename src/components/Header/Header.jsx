import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authReducer';
import { loginSelector } from '../../selectors/headerSelectors';
import logo from './../../assets/svg/logo.svg';
import styles from './Header.module.css';
import { AuthContext } from '../../App';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useContext(AuthContext);

  const login = useSelector(loginSelector);

  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <div className={styles.login_block}>
        {isAuth ? (
          <div>
            <span>{login}</span>
            <Link to='/login'>
              <button onClick={() => dispatch(logout())}>Log out</button>
            </Link>
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
