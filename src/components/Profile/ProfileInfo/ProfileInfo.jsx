import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={styles.user_banner}
        src="https://previews.123rf.com/images/alri/alri0706/alri070600080/1148008-an-abstract-background-very-long-width-height=6-1-high-resolution.jpg"
        alt="banner"
      />
      <div className={styles.user}>
        <img
          className={styles.user_avatar}
          src="https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru"
          alt="user avatar"
        />
        <div className={styles.user_description}>
          <span>User name: Vladislav K.</span>
          <span>Date of Birth: 21 october</span>
          <span>City: Kharkiv</span>
          <span>Education: Special secondary</span>
          <span>Email: vlad.kosolapov48@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
