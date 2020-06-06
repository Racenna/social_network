import React from "react";
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "./../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.usersData.currentPage,
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    isFetching: state.usersData.isFetching,
    followingInProgress: state.usersData.followingInProgress,
  };
};

// const withRedirect = withAuthRedirect(UsersContainer);

// export default withAuthRedirect(
//   connect(mapStateToProps, {
//     getUsers,
//     follow,
//     unfollow,
//   })(UsersContainer)
// );

export default compose(
  connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);
