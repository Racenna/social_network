import React from "react";
import {
  addPostActionCreator,
  inputPostActionCreator,
} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const inputPost = (text) => {
          store.dispatch(inputPostActionCreator(text));
        };

        return (
          <MyPosts
            addPost={addPost}
            inputPost={inputPost}
            posts={state.profileData.posts}
            postText={state.profileData.postText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
