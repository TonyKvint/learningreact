import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogsReducer';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
  };

  let onNewMessageChange = () => {
    let body = newMessageElement.current.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder="Enter your message" onChange={onNewMessageChange} ref={newMessageElement} value={newMessageBody}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
