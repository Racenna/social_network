import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import send from "./../../../svg/send.svg";

const MyPosts = (props) => {
  const posts = props.profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const text = React.createRef();

  const clickHandler = () => {
    debugger;
    props.setPost();
  };

  const changeHandler = () => {
    debugger;
    props.setTextPost(text.current.value);
  };

  return (
    <div>
      <span>My post</span>
      <div className={styles.input_post}>
        <textarea
          value={props.profileData.postText}
          onChange={changeHandler}
          ref={text}
          placeholder="Type text"
        />
        <button onClick={clickHandler}>
          <img src={send} alt="send svg" />
        </button>
      </div>
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
