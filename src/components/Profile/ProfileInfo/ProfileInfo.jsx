import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePhoto, saveProfile } from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileDescriptionReduxForm from './ProfileDescription/ProfileDescriptionForm';
import defaultAvatar from './../../../assets/images/defaultAvatar.png';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ isOwner }) => {
  const [editMode, setEditMode] = useState(false);

  const profile = useSelector((state) => state.profileData.profile);
  const status = useSelector((state) => state.profileData.status);

  const dispatch = useDispatch();

  if (!profile) return <Preloader />;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  const onSubmit = (data) => {
    dispatch(saveProfile(data)).then(() => {
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
          <ProfileDescriptionReduxForm
            initialValues={profile}
            onSubmit={onSubmit}
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
