// const { default: profileReducer } = require("./profileReducer");
import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 5 },
    { id: 3, message: "Cool! ~(^-^~)", likeCount: 25 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. test data
  let action = addPost("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it("after deleting length of messages should be decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  let action = deletePost(100);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
