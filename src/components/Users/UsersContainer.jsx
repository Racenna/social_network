import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getUsers,
  getProfileUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
} from '../../redux/usersReducer/index';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

const UsersContainer = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const users = useSelector(getProfileUsersSelector);
  const totalUsersCount = useSelector(getTotalUsersCountSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const isFetching = useSelector(getIsFetchingSelector);
  const followingInProgress = useSelector(getFollowingInProgressSelector);

  const dispatch = useDispatch();
  const location = useLocation();

  const onPageChanged = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = +params.get('page');
    if (!page) {
      dispatch(getUsers(1, pageSize));
      setCurrentPage(1);
    } else {
      dispatch(getUsers(page, pageSize));
      setCurrentPage(page);
    }
  }, [location, pageSize, dispatch]);

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
