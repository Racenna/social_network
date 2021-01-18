import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePhoto, saveProfile } from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileDescriptionForm from './ProfileDescription/ProfileDescriptionForm';
import defaultAvatar from './../../../assets/images/defaultAvatar.png';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ isOwner, profile, status }) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  if (!profile) return <Preloader />;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  const handleSubmit = (values) => {
    dispatch(saveProfile(values)).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={styles.user}>
        {isOwner && (
          <input
            type='file'
            id='upload-button'
            style={{ display: 'none' }}
            onChange={onPhotoSelected}
          />
        )}
        <div>
          <label
            htmlFor='upload-button'
            style={isOwner ? { cursor: 'pointer' } : null}
          >
            <img
              title={isOwner ? 'upload image' : null}
              className={styles.user_avatar}
              src={profile.photos.large ? profile.photos.large : defaultAvatar}
              alt='user avatar'
            />
          </label>
          <ProfileStatus status={status} />
        </div>
        {editMode ? (
          <ProfileDescriptionForm
            handleSubmit={handleSubmit}
            profile={profile}
          />
        ) : (
          <ProfileDescription
            isOwner={isOwner}
            toEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
