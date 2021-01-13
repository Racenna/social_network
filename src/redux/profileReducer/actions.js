import { profileAPI, authAPI } from '../../api/api';
import { setUserData } from '../authReducer/index';

export const ADD_POST = 'profile/ADD_POST';
export const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
export const SET_STATUS = 'profile/SET_STATUS';
export const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const addPost = (post) => ({ type: ADD_POST, post });

export const getProfile = (userId) => async (dispatch) => {
  if (userId) {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
  } else {
    const response = await authAPI.getActiveUser();
    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserData(id, email, login));
      const data = await profileAPI.getProfile(id);
      dispatch(setUserProfile(data));
    }
  }
};

export const getStatus = (userId) => async (dispatch) => {
  if (userId) {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
  } else {
    const response = await authAPI.getActiveUser();
    if (response.resultCode === 0) {
      const { id } = response.data;
      const data = await profileAPI.getStatus(id);
      dispatch(setStatus(data));
    }
  }
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getProfile(userId));
  }
};
