import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.centered}>
        <img
          className={styles.post_image}
          src='https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru'
          alt='Post'
        />
        {props.message}
      </div>
      <div>
        <span>like</span>
        <span> {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
