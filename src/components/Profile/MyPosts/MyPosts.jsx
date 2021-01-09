import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './../../../redux/profileReducer';
import { profileDataSelector } from '../../../selectors/profileSelectors';
import Post from './Post/Post';
import MyPostsReduxForm from './MyPostForm/MyPostsForm';

const MyPosts = () => {
  const profileData = useSelector(profileDataSelector);

  const dispatch = useDispatch();

  const posts = profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const onSubmit = (data) => {
    if (data.post === undefined || data.post.trim() === '') return;
    dispatch(addPost(data.post.trim()));
    data.post = '';
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
