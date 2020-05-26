import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import send from "./../../../svg/send.svg";

const MyPosts = (props) => {
  const posts = props.profileData.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  const clickHandler = () => {
    if (props.profileData.postText === "") return;
    props.addPost();
  };

  const changeHandler = (e) => {
    const text = e.target.value;
    props.inputPost(text);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clickHandler();
    }
  };

  return (
    <div>
      <span>My post</span>
      <div className={styles.input_post}>
        <textarea
          value={props.profileData.postText}
          onChange={changeHandler}
          onKeyDown={onEnterPress}
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
