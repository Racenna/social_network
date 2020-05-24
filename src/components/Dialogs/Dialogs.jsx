import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import InputMessage from "./InputMessage/InputMessage";

const Dialogs = (props) => {
  const dialogsItems = props.state.dialogs.map((dialog) => (
    <DialogsItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      image={dialog.image}
    />
  ));

  const messageItems = props.state.messages.map((message) => (
    <MessageItem
      key={message.id}
      message={message.message}
      status={message.status}
    />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsItems}</div>
      <div className={styles.message_items}>{messageItems}</div>
      <InputMessage
        messageText={props.state.messageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
