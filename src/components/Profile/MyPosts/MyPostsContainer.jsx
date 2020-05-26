import React from "react";
import {
  addPostActionCreator,
  inputPostActionCreator,
} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const inputPost = (text) => {
    props.store.dispatch(inputPostActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      inputPost={inputPost}
      posts={state.profileData.posts}
      postText={state.profileData.postText}
    />
  );
};

export default MyPostsContainer;
