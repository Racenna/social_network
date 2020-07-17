import { profileAPI, authAPI } from "../api/api";
import { setUserData } from "./authReducer";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: "Cool! ~(^-^~)", likeCount: 25 },
  ],
  profile: null,
  status: "",
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

/* Thunk */
export const getProfile = (userId) => async (dispatch) => {
  if (userId) {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
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
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
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

export default profileReducer;
