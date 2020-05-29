// import React from "react";
import Dialogs from "./Dialogs";
import { sendMessage, inputMessage } from "../../redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};

export default connect(mapStateToProps, {
  sendMessage,
  inputMessage,
})(Dialogs);
