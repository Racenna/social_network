import React from "react";
import styles from "./Users.module.css";
import userAvatar from "./../../assets/images/defaultAvatar.png";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const renderPage = pages.map((page) => {
    const classes = `${styles.unselectable} ${
      props.currentPage === page && styles.selected_page
    }`;

    if (
      page === 1 ||
      page === props.totalUsersCount ||
      (page >= props.currentPage - 3 && page <= props.currentPage + 3) ||
      page === pagesCount
    ) {
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
    }
  });

  return (
    <div className={styles.app_wrapper_users}>
      <div className={styles.pagination}>
        <div
          className={styles.unselectable}
          onClick={() => {
            if (props.currentPage !== 1)
              props.onPageChanged(props.currentPage - 1);
            return;
          }}
        >
          &larr;
        </div>
        {renderPage}
        <div
          className={styles.unselectable}
          onClick={() => {
            if (props.currentPage !== pagesCount)
              props.onPageChanged(props.currentPage + 1);
            return;
          }}
        >
          &rarr;
        </div>
      </div>
      {props.users.map((user) => (
        <div className={styles.item} key={user.id}>
          <div className={styles.centered}>
            <img
              src={user.photos.small != null ? user.photos.small : userAvatar}
              alt="user_avatar"
            />
            {user.followed ? (
              <button
                className={styles.unfollow}
                onClick={() => {
                  props.followUnfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={styles.follow}
                onClick={() => {
                  props.followUnfollow(user.id);
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
      ))}
    </div>
  );
};

export default Users;
