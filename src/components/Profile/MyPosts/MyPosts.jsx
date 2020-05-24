import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import send from "./../../../svg/send.svg";

const MyPosts = (props) => {
  const posts = props.profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const postText = React.createRef();

  const clickHandler = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  const changeHandler = () => {
    const text = postText.current.value;
    props.dispatch({ type: "INPUT-POST", message: text });
  };

  return (
    <div>
      <span>My post</span>
      <div className={styles.input_post}>
        <textarea
          value={props.profileData.postText}
          onChange={changeHandler}
          ref={postText}
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
