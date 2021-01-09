import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, getStatus } from '../../redux/profileReducer';
import {
  ownerIdSelector,
  profileSelector,
  statusSelector,
} from '../../selectors/profileSelectors';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const ownerId = useSelector(ownerIdSelector);
  const profile = useSelector(profileSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  const userId = props.match.params.userId;

  useEffect(() => {
    const id = userId || ownerId;
    dispatch(getProfile(id));
    dispatch(getStatus(id));
  }, [userId, ownerId, dispatch]);

  return (
    <div>
      <Profile isOwner={!userId} profile={profile} status={status} />
    </div>
  );
};

export default compose(withRouter, withAuthRedirect)(ProfileContainer);
