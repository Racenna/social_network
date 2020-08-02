import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from './../../../assets/images/defaultAvatar.png';
import styles from './User.module.css';

const User = (props) => {
  const { user, followingInProgress, unfollow, follow } = props;
  return (
    <div className={styles.item}>
      <div className={styles.centered}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small ? user.photos.small : userAvatar}
            alt='user_avatar'
          />
        </NavLink>
        {user.followed ? (
          <button
            className={styles.unfollow}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={styles.follow}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.name_phrase}>
          <span>{user.name}</span>
          <span className={styles.phrase}>{user.status}</span>
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
