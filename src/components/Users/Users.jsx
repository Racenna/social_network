import React from "react";
import styles from "./Users.module.css";
import userAvatar from "./../../assets/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  const filteredPage = (page) => {
    if (
      page === 1 ||
      page === props.totalUsersCount ||
      (page >= props.currentPage - 3 && page <= props.currentPage + 3) ||
      page === pagesCount
    ) {
      return true;
    }
    return false;
  };

  const unFollowClick = (userId) => {
    props.toggleIsFollowingInProgress(true, userId);
    usersAPI.unFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        props.followAndUnfollow(userId);
      }
      props.toggleIsFollowingInProgress(false, userId);
    });
  };

  const followClick = (userId) => {
    props.toggleIsFollowingInProgress(true, userId);

    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        props.followAndUnfollow(userId);
      }
      props.toggleIsFollowingInProgress(false, userId);
    });
  };

  const prevuesPage = () => {
    if (props.currentPage !== 1) props.onPageChanged(props.currentPage - 1);
    return;
  };

  const nextPage = () => {
    if (props.currentPage !== pagesCount)
      props.onPageChanged(props.currentPage + 1);
    return;
  };

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const renderPage = pages.filter(filteredPage).map((page) => {
    const classes = `${styles.unselectable} ${
      props.currentPage === page && styles.selected_page
    }`;

    return (
      <div
        key={page}
        className={classes}
        onClick={() => {
          props.onPageChanged(page);
        }}
      >
        {page}
      </div>
    );
  });

  return (
    <div className={styles.app_wrapper_users}>
      <div className={styles.pagination}>
        <div className={styles.unselectable} onClick={prevuesPage}>
          &larr;
        </div>
        {renderPage}
        <div className={styles.unselectable} onClick={nextPage}>
          &rarr;
        </div>
      </div>
      {props.users.map((user) => (
        <div className={styles.item} key={user.id}>
          <div className={styles.centered}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small ? user.photos.small : userAvatar}
                alt="user_avatar"
              />
            </NavLink>
            {user.followed ? (
              <button
                className={styles.unfollow}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={unFollowClick.bind(null, user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={styles.follow}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={followClick.bind(null, user.id)}
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
      ))}
    </div>
  );
};

export default Users;
