import { profileAPI, authAPI } from '../../api/api';
import { setUserData } from '../auth_reducer/authReducer';
import { stopSubmit } from 'redux-form';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  ProfileStateType,
  ProfileType,
  PhotosType,
  ProfileActionTypes,
  ADD_POST,
  SET_USER_PROFILE,
  DELETE_POST,
  SAVE_PHOTO_SUCCESS,
  SET_STATUS,
} from './types';

const initialState: ProfileStateType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: 'Cool! ~(^-^~)', likeCount: 25 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): ProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.message,
            likeCount: 0,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
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
        // profile: { ...state.profile, photos: action.photos },
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

/* Action creator */
export const addPost = (message: string): ProfileActionTypes => ({
  type: ADD_POST,
  message,
});

export const setUserProfile = (payload: ProfileType): ProfileActionTypes => ({
  type: SET_USER_PROFILE,
  payload,
});

export const setStatus = (status: string): ProfileActionTypes => ({
  type: SET_STATUS,
  status,
});

// TODO: delete post
export const deletePost = (postId: number): ProfileActionTypes => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos: PhotosType): ProfileActionTypes => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

/* Thunk */
export const getProfile = (
  userId: number | null
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    if (userId) {
      const response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response));
    } else {
      const response = await authAPI.getActiveUser();
      if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setUserData(id, email, login, true));
        const data = await profileAPI.getProfile(id);
        dispatch(setUserProfile(data));
      }
    }
  } catch (error) {
    console.error('ProfileReducer<getProfile>_error:', error);
  }
};

export const getStatus = (
  userId: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
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
  } catch (error) {
    console.error('ProfileReducer<getStatus>_error:', error);
  }
};

export const updateStatus = (
  status: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.error('ProfileReducer<updateStatus>_error:', error);
  }
};

export const savePhoto = (
  file: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
  } catch (error) {
    console.error('ProfileReducer<savePhoto>_error:', error);
  }
};

export const saveProfile = (
  profile: ProfileType
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
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
  } catch (error) {
    console.error('ProfileReducer<saveProfile>_error:', error);
  }
};

export default profileReducer;
