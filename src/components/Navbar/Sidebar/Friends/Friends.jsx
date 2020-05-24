import React from "react";
import styles from "./Friends.module.css";

const Friends = (props) => {
  const friends = props.state.users.map((user) => (
    <div key={user.id} className={styles.item}>
      <img src={user.image} alt="user avatar" />
      <span>{user.name}</span>
    </div>
  ));

  return (
    <div>
      <div className={styles.title}>
        <span>{props.state.title}</span>
      </div>
      <div className={styles.content}>{friends}</div>
    </div>
  );
};

export default Friends;
