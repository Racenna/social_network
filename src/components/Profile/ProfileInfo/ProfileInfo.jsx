import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "./../../../assets/images/defaultAvatar.png";
import greenTick from "./../../../assets/svg/green_tick.svg";
import redCross from "./../../../assets/svg/red_cross.svg";

const ProfileInfo = (props) => {
  console.log(props);
  if (!props.profile) return <Preloader />;
  return (
    <div>
      <img
        className={styles.user_banner}
        src="https://previews.123rf.com/images/alri/alri0706/alri070600080/1148008-an-abstract-background-very-long-width-height=6-1-high-resolution.jpg"
        alt="banner"
      />
      <div className={styles.user}>
        <img
          className={styles.user_avatar}
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : defaultAvatar
          }
          alt="user avatar"
        />
        <div className={styles.user_description}>
          <span>User name: {props.profile.fullName}</span>
          <span>About Me: {props.profile.aboutMe}</span>
          <span>
            Looking for a job:{" "}
            {props.profile.lookingForAJob ? (
              <img
                className={styles.tick_and_cross}
                src={greenTick}
                alt="tick"
              />
            ) : (
              <img
                className={styles.tick_and_cross}
                src={redCross}
                alt="cross"
              />
            )}
          </span>
          <span>
            Looking for a job description:{" "}
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : "No description"}
          </span>
          <div className={styles.contacts}>
            Contacts: <div>gitHub: {props.profile.contacts.github}</div>
            <div>facebook: {props.profile.contacts.facebook}</div>
            <div>instagram: {props.profile.contacts.instagram}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
