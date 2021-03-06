import React from 'react';
import { useSelector } from 'react-redux';
import { dialogsDataSelector } from '../../redux/dialogsReducer';
import DialogsItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import InputMessage from './InputMessage/InputMessage';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  const dialogsData = useSelector(dialogsDataSelector);

  const dialogsItems = dialogsData.dialogs.map((dialog) => (
    <DialogsItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      image={dialog.image}
    />
  ));

  const messageItems = dialogsData.messages.map((message) => (
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
      <InputMessage />
    </div>
  );
};

export default Dialogs;
