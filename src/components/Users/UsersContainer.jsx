import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getUsers,
  getProfileUsersSelector,
  getCurrentPageSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
} from '../../redux/usersReducer/index';
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
  const history = useHistory();
  const location = useLocation();

  const onPageChanged = (page) => {
    dispatch(getUsers(page, pageSize));
    history.push({
      pathname: '/users',
      search: `?page=${page}`,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = +params.get('page');
    if (!page) {
      dispatch(getUsers(1, pageSize));
    } else {
      dispatch(getUsers(page, pageSize));
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
