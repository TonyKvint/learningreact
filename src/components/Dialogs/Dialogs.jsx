import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.data.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.data.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
