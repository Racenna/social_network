import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
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
  const history = useHistory();

  const onPageChanged = (page) => {
    dispatch(getUsers(page, pageSize));
  };

  useEffect(() => {
    const parsed = queryString.parse(history.location.search);

    let actualPage = currentPage;

    if (!!parsed.page) actualPage = Number(parsed.page);
    dispatch(getUsers(actualPage, pageSize));
  }, []);

  useEffect(() => {
    history.push({
      pathname: '/users',
      search: `?page=${currentPage}`,
    });
  });

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
