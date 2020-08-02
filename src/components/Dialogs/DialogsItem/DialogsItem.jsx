import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogsItem.module.css';

const DialogsItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
        <div className={styles.centered}>
          <img src={props.image} alt='user avatar' />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
