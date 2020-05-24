import React from "react";
import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
        <div className={styles.centered}>
          <img src={props.image} alt="user avatar" />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
