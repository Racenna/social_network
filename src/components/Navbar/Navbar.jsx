import React from 'react';
import { useSelector } from 'react-redux';
import { sidebarDataSelector } from '../../redux/sidebarReducer/navbarSelectors';
import styles from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';

const Navbar = () => {
  const sidebarData = useSelector(sidebarDataSelector);

  return (
    <nav className={styles.nav}>
      <Navigation />
      <Sidebar friends={sidebarData.friends} />
    </nav>
  );
};

export default Navbar;
