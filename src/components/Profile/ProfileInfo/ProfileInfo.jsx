import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileDescriptionReduxForm from "./ProfileDescription/ProfileDescriptionForm";
import defaultAvatar from "./../../../assets/images/defaultAvatar.png";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) return <Preloader />;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (data) => {
    props.saveProfile(data).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={styles.user}>
        {props.isOwner && (
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={onPhotoSelected}
          />
        )}
        <div>
          <label
            htmlFor="upload-button"
            style={props.isOwner ? { cursor: "pointer" } : null}
          >
            <img
              title={props.isOwner ? "upload image" : null}
              className={styles.user_avatar}
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : defaultAvatar
              }
              alt="user avatar"
            />
          </label>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        {editMode ? (
          <ProfileDescriptionReduxForm
            initialValues={props.profile}
            onSubmit={onSubmit}
            profile={props.profile}
          />
        ) : (
          <ProfileDescription
            isOwner={props.isOwner}
            toEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
