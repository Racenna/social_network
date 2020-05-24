import React from "react";
// import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        profileData={props.profileData}
        setPost={props.setPost}
        setTextPost={props.setTextPost}
      />
    </div>
  );
};

export default Profile;
