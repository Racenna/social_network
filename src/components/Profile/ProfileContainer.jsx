import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, getStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const myId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  const userId = props.match.params.userId;

  useEffect(() => {
    const id = userId || myId;
    dispatch(getProfile(id));
    dispatch(getStatus(id));
  }, [userId, myId, dispatch]);

  return (
    <div>
      <Profile isOwner={!userId} />
    </div>
  );
};

export default compose(withRouter, withAuthRedirect)(ProfileContainer);
