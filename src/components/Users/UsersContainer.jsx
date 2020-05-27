// import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAndUnfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUnfollow: (userId) => {
      dispatch(followAndUnfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalCountActionCreator(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
