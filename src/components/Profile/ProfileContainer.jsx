import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getProfile,
  getStatus,
  ownerIdSelector,
  profileSelector,
  statusSelector,
} from '../../redux/profileReducer/index';
import Profile from './Profile';

const ProfileContainer = () => {
  const ownerId = useSelector(ownerIdSelector);
  const profile = useSelector(profileSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  const { userId } = useParams();

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

export default ProfileContainer;
