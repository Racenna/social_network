import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUsers,
  getProfileUsersSelector,
  getCurrentPageSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

const UsersContainer = () => {
  const users = useSelector(getProfileUsersSelector);
  const totalUsersCount = useSelector(getTotalUsersCountSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const isFetching = useSelector(getIsFetchingSelector);
  const followingInProgress = useSelector(getFollowingInProgressSelector);

  const dispatch = useDispatch();

  const onPageChanged = (page) => {
    dispatch(getUsers(page, pageSize));
  };

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, [currentPage, pageSize, dispatch]);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        pageSize={pageSize}
        followingInProgress={followingInProgress}
        onPageChanged={onPageChanged}
      />
    </>
  );
};

export default UsersContainer;
