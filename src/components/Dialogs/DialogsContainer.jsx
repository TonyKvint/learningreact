import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
