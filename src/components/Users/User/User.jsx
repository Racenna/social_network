import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.centered}>
        <img src={props.user.avatar} alt="user_avatar" />
        {props.user.follow ? (
          <button
            className={styles.follow}
            onClick={() => {
              props.followUnfollow(props.user.id);
            }}
          >
            Follow
          </button>
        ) : (
          <button
            className={styles.unfollow}
            onClick={() => {
              props.followUnfollow(props.user.id);
            }}
          >
            Unfollow
          </button>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name_phrase}>
          <span>{props.user.name}</span>
          <span className={styles.phrase}>{props.user.phrase}</span>
        </div>
        <div className={styles.country_city}>
          <span>{props.user.location.country}</span>
          <span>{props.user.location.city}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
