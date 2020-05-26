import React from "react";
import styles from "./User.module.css";
import userAvatar from "./../../../assets/images/defaultAvatar.png";

const User = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.centered}>
        <img
          src={
            props.user.photos.small != null
              ? props.user.photos.small
              : userAvatar
          }
          alt="user_avatar"
        />
        {props.user.followed ? (
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
          <span className={styles.phrase}>{props.user.status}</span>
        </div>
        <div className={styles.country_city}>
          <span>Ukrainian</span>
          <span>Kharkiv</span>
        </div>
      </div>
    </div>
  );
};

export default User;
