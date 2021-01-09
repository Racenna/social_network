import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ isOwner, profile, status }) => {
  return (
    <div>
      <ProfileInfo isOwner={isOwner} profile={profile} status={status} />
      <MyPosts />
    </div>
  );
};

export default Profile;
