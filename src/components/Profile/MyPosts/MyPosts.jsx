import React from 'react';
import Post from './Post/Post';
import MyPostsReduxForm from './MyPostForm/MyPostsForm';

const MyPosts = (props) => {
  const posts = props.profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const onSubmit = (data) => {
    if (data.message === undefined || data.message.trim() === '') return;
    props.addPost(data.message.trim());
    data.message = '';
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
