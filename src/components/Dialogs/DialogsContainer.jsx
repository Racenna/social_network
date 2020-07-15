// import React from "react";
import Dialogs from "./Dialogs";
import { sendMessage } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
