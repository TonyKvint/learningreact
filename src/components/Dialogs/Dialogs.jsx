import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

//в пропсы приходит dialogsPage, dispatch, updateMessage и sendMessage

const Dialogs = (props) => {

  debugger;

  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let messageBody = props.dialogsPage.newMessageBody;

  let newMessageElement = React.createRef();

  const sendMessage = () => {
    props.sendMessage();
  };

  const updateMessage = () => {
    let body = newMessageElement.current.value;
    props.updateMessage(body);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder="Enter your message" onChange={updateMessage} ref={newMessageElement} value={messageBody}></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
