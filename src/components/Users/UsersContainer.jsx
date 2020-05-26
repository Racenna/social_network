// import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAndUnfollowActionCreator,
  setUsersActionCreator,
} from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
