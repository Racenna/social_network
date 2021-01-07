import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import styles from './Users.module.css';
import User from './User/User';
import { UserType } from '../../redux/users_reducer/types';

type PropsType = {
  users: UserType[];
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  followingInProgress: number[];
  onPageChanged: (page: number) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const Users: React.FC<PropsType> = (props) => {
  const {
    users,
    currentPage,
    totalUsersCount,
    pageSize,
    followingInProgress,
    onPageChanged,
    follow,
    unfollow,
  } = props;
  return (
    <div className={styles.app_wrapper_users}>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user) => (
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
