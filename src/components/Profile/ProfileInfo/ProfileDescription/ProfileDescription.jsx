import React from "react";
import greenTick from "./../../../../assets/svg/green_tick.svg";
import redCross from "./../../../../assets/svg/red_cross.svg";
import styles from "./../ProfileInfo.module.css";

const ProfileDescription = (props) => {
  return (
    <div className={styles.user_description}>
      {props.isOwner && (
        <div>
          <button onClick={props.toEditMode}>edit</button>
        </div>
      )}
      <span>Full name: {props.profile.fullName}</span>
      <span>About Me: {props.profile.aboutMe}</span>
      <span>
        Looking for a job:{" "}
        {props.profile.lookingForAJob ? (
          <img className={styles.tick_and_cross} src={greenTick} alt="tick" />
        ) : (
          <img className={styles.tick_and_cross} src={redCross} alt="cross" />
        )}
      </span>
      <span>
        My professional skills:{" "}
        {props.profile.lookingForAJobDescription
          ? props.profile.lookingForAJobDescription
          : "No skills"}
      </span>
      <div className={styles.contacts}>
        Contacts:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactKey={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contacts = ({ contactKey, contactValue }) => {
  return (
    <div>
      {contactKey}: {contactValue}
    </div>
  );
};

export default ProfileDescription;
