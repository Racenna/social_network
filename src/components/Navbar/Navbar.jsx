import React from "react";
import styles from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Navigation from "./Navigation/Navigation";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <Navigation />
      <Sidebar state={props.sidebar} />
    </nav>
  );
};

export default Navbar;
