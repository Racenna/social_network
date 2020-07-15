import React from "react";
import Post from "./Post/Post";
import MyPostsReduxForm from "./MyPostForm/MyPostsForm";

const MyPosts = (props) => {
  const posts = props.profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const onSubmit = (data) => {
    if (data.post === undefined || data.post.trim() === "") return;

    props.addPost(data.post.trim());
  };

  return (
    <div>
      <h3>My post</h3>
      <MyPostsReduxForm onSubmit={onSubmit} />
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
