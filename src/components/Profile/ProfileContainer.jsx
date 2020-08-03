import React from 'react';
import { connect } from 'react-redux';
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile_reducer/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  currentProfile() {
    const id = this.props.match.params.userId || this.props.myId;
    this.props.getProfile(id);
    this.props.getStatus(id);
  }

  componentDidMount() {
    this.currentProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.currentProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} isOwner={!this.props.match.params.userId} />
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
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
