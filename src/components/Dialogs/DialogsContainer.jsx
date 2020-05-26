// import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  inputMessageActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    inputMessage: (text) => {
      dispatch(inputMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
