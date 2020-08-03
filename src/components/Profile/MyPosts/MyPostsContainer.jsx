import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile_reducer/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profileData: state.profileData,
});

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
