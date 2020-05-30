import { profileAPI, usersAPI } from "../api/api";
import { setUserData } from "./authReducer";

const ADD_POST = "ADD-POST";
const INPUT_POST = "INPUT-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: "Cool! ~(^-^~)", likeCount: 25 },
  ],

  postText: "",

  profile: null,
};

/* Action creator */
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postText: "",
        posts: [
          ...state.posts,
          {
            id: 6,
            message: state.postText,
            likeCount: 0,
          },
        ],
      };

    case INPUT_POST:
      return {
        ...state,
        postText: action.message,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const inputPost = (text) => ({
  type: INPUT_POST,
  message: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

/* Thunk */
export const getProfile = (userId, isAuth) => {
  return (dispatch) => {
    if (userId) {
      profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
      });
    } else {
      usersAPI.getActiveUser().then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          dispatch(setUserData(id, email, login));
          profileAPI.getProfile(id).then((data) => {
            if (isAuth) {
              dispatch(setUserProfile(data));
            } else {
              dispatch(setUserProfile(null));
            }
          });
        }
      });
    }
  };
};

export default profileReducer;
