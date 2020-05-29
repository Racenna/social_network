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

export default profileReducer;
