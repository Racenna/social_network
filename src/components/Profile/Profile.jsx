import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ isOwner }) => {
  return (
    <div>
      <ProfileInfo isOwner={isOwner} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
