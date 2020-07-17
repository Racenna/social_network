import React from "react";
import Pagination from "../common/Pagination/Pagination";
import styles from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  const {
    currentPage,
    onPageChanged,
    totalUsersCount,
    pageSize,
    followingInProgress,
    follow,
    unfollow,
  } = props;
  return (
    <div className={styles.app_wrapper_users}>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
