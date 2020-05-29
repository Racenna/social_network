// import React from "react";
import { addPost, inputPost } from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, inputPost })(
  MyPosts
);

export default MyPostsContainer;
