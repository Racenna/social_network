import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {
  console.log("props", props);
  if (props.usersData.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        return response.data.items;
      })
      .then((data) => {
        console.log(data);
        props.setUsers(data);
      });
  }

  const users = props.usersData.users.map((user) => (
    <User key={user.id} user={user} followUnfollow={props.followUnfollow} />
  ));

  return <div className={styles.app_wrapper_users}>{users}</div>;
};

export default Users;
