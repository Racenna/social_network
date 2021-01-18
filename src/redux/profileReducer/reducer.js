import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  SAVE_PHOTO_SUCCESS,
} from './actions';

const initialState = {
  posts: [
    { id: 1, message: '~_~', likeCount: 5 },
    { id: 2, message: "It's my first post", likeCount: 15 },
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export default profileReducer;
