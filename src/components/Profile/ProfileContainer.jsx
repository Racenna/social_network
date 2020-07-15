import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // myId -- if path: /profile
    // userId -if path: /profile/:id
    // const userId = this.props.match.params.userId;
    const id = this.props.match.params.userId || this.props.myId;
    // this.props.getProfile(this.props.myId);
    // this.props.getStatus(this.props.myId);
    this.props.getProfile(id);
    this.props.getStatus(id);
    console.log(
      `my id: ${this.props.myId} |
       user: ${this.props.match.params.userId} |
       result: ${id}`
    );
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
