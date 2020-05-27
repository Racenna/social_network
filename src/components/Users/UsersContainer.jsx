// import React from "react";
import React from "react";
import { connect } from "react-redux";
import {
  followAndUnfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  toggleIsFetchingActionCreator,
} from "./../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);

    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);

        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          followUnfollow={this.props.followUnfollow}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          users={this.props.users}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingActionCreator(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
