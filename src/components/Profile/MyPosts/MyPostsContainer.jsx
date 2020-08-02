import { connect } from 'react-redux';
import { addPost } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profileData: state.profileData,
});

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
