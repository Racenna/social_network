import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const userId = props.match.params.userId;
  const { myId, getProfile, getStatus } = props;

  useEffect(() => {
    const id = userId || myId;
    getProfile(id);
    getStatus(id);
  }, [userId, myId, getProfile, getStatus]);

  return (
    <div>
      <Profile {...props} isOwner={!props.match.params.userId} />
    </div>
  );
};

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
