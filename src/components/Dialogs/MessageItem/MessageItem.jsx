import React from "react";
import styles from "./MessageItem.module.css";

const MessageItem = (props) => {
  const messageClass =
    styles.item + " " + (props.status === "My" ? styles.my : styles.friend);

  return (
    <div className={messageClass}>
      <span>{props.message}</span>
    </div>
  );
};

export default MessageItem;
