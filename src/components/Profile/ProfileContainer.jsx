import React from "react";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.userId || this.props.myId;
    this.props.getProfile(id);
    this.props.getStatus(id);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myId: state.auth.id,
  profile: state.profileData.profile,
  status: state.profileData.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
