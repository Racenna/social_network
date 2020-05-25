const ADD_POST = "ADD-POST";
const INPUT_POST = "INPUT-POST";

const profileReducer = (state, action) => {
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
