import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import styles from './Users.module.css';
import User from './User/User';

const Users = ({
  users,
  totalUsersCount,
  currentPage,
  pageSize,
  followingInProgress,
  onPageChanged,
}) => {
  return (
    <div className={styles.app_wrapper_users}>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
