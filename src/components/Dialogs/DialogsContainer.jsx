import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  inputMessageActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const inputMessage = (text) => {
    props.store.dispatch(inputMessageActionCreator(text));
  };

  return (
    <Dialogs
      dialogs={state.dialogsData.dialogs}
      messages={state.dialogsData.messages}
      messageText={state.dialogsData.messageText}
      sendMessage={sendMessage}
      inputMessage={inputMessage}
    />
  );
};

export default DialogsContainer;
