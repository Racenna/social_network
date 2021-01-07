import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsers, follow, unfollow } from './../../redux/usersReducer';
import {
  getProfileUsersSelector,
  getCurrentPageSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
} from '../../selectors/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

const UsersContainer = (props) => {
  const { currentPage, pageSize, getUsers } = props;

  const onPageChanged = (page) => {
    getUsers(page, pageSize);
  };

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [currentPage, pageSize, getUsers]);

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users {...props} onPageChanged={onPageChanged} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: getCurrentPageSelector(state),
    users: getProfileUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);
