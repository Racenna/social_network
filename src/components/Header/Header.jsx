import React from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/svg/logo.svg";
import { NavLink, Redirect } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.login_block}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
            <button onClick={props.logout}>
              <NavLink to="/login">Log out</NavLink>
            </button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
