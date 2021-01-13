import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  profileDataSelector,
} from '../../../redux/profileReducer/index';
import Post from './Post/Post';
import MyPostsForm from './MyPostForm/MyPostsForm';

const MyPosts = () => {
  const profileData = useSelector(profileDataSelector);

  const dispatch = useDispatch();

  const posts = profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const handleSubmit = (values) => {
    const { post } = values;
    dispatch(addPost(post));
  };

  return (
    <div>
      <h3>My post</h3>
      <MyPostsForm handleSubmit={handleSubmit} />
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
