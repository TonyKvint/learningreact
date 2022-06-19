import React from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

//в пропсы приходит dialogsPage и dispatch

const DialogsContainer = (props) => {

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Dialogs
      dialogsPage={props.dialogsPage}
      dispatch={props.dispatch}
      sendMessage={onSendMessageClick}
      messageChange={onMessageChange}
    />
  );
};

export default DialogsContainer;
