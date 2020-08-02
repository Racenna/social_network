import { profileAPI, authAPI } from '../api/api';
import { setUserData } from './authReducer';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: 'Cool! ~(^-^~)', likeCount: 25 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 65,
            message: action.post,
            likeCount: 0,
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

/* Action creator */
export const addPost = (post) => ({ type: ADD_POST, post });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

/* Thunk */
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
  } else {
    const message =
      response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('editProfile', { _error: message }));
    return Promise.reject(message);
    // dispatch(stopSubmit("editProfile", { contacts: { facebook: message } })); //TODO: parse string
  }
};

export default profileReducer;
