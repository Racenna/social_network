import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.usersData.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatar:
          "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru",
        follow: true,
        name: "Vlad",
        phrase: "I'm fine",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
      },
      {
        id: 2,
        avatar:
          "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru",
        follow: false,
        name: "Andrei",
        phrase: "I'm fine",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
      },
      {
        id: 3,
        avatar:
          "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru",
        follow: true,
        name: "Angelina",
        phrase: "I'm fine",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
      },
      {
        id: 4,
        avatar:
          "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru",
        follow: true,
        name: "Vova",
        phrase: "I'm fine",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
      },
      {
        id: 5,
        avatar:
          "https://vignette.wikia.nocookie.net/discord-wikia/images/5/5e/Default.png/revision/latest/scale-to-width-down/340?cb=20191215094354&path-prefix=ru",
        follow: true,
        name: "Vadim",
        phrase: "I'm fine",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
      },
    ]);
  }

  const users = props.usersData.users.map((user) => (
    <User key={user.id} user={user} followUnfollow={props.followUnfollow} />
  ));

  return <div className={styles.app_wrapper_users}>{users}</div>;
};

export default Users;
