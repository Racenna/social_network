import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  inputMessageActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const inputMessage = (text) => {
          store.dispatch(inputMessageActionCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
