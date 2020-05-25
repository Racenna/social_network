const ADD_POST = "ADD-POST";
const INPUT_POST = "INPUT-POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: "Cool! ~(^-^~)", likeCount: 25 },
  ],

  postText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: state.postText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.postText = "";
      return state;

    case INPUT_POST:
      state.postText = action.message;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const inputPostActionCreator = (text) => ({
  type: INPUT_POST,
  message: text,
});

export default profileReducer;
