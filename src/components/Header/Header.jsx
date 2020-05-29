import React from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.login_block}>
        {props.isAuth ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
