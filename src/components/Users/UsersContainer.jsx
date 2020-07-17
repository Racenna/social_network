import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "./../../redux/usersReducer";
import {
  getProfileUsersSelector,
  getCurrentPageSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
} from "../../selectors/usersSelectors";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

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
