import React from "react";
import { connect } from "react-redux";
import {
  followAndUnfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
} from "./../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);

    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);

      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          followAndUnfollow={this.props.followAndUnfollow}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          users={this.props.users}
          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersData.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  followAndUnfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
})(UsersContainer);
