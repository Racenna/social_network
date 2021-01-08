import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ isOwner, profile, status }) => {
  return (
    <div>
      <ProfileInfo isOwner={isOwner} profile={profile} status={status} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
