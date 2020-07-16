import { profileAPI, authAPI } from "../api/api";
import { setUserData } from "./authReducer";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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

/* Thunk */
export const getProfile = (userId) => {
  return (dispatch) => {
    if (userId) {
      profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
      });
    } else {
      authAPI.getActiveUser().then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          dispatch(setUserData(id, email, login));
          profileAPI.getProfile(id).then((data) => {
            dispatch(setUserProfile(data));
          });
        }
      });
    }
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    if (userId) {
      profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
      });
    } else {
      authAPI.getActiveUser().then((data) => {
        if (data.resultCode === 0) {
          const { id } = data.data;
          profileAPI.getStatus(id).then((response) => {
            dispatch(setStatus(response.data));
          });
        }
      });
    }
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
