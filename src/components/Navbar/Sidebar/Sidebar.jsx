import React from "react";
import styles from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return (
    <div className={styles.app_wrapper_sidebar}>
      <Friends state={props.state.friends} />
    </div>
  );
};

export default Sidebar;
