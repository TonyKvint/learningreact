import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

/* -------------------------------------------------------------- */

let dialogsData = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Veronica" },
  { id: 3, name: "Alexey" },
  { id: 4, name: "Brother" },
  { id: 5, name: "Mom" },
  { id: 6, name: "Max" },
  { id: 7, name: "Seva" },
];

let messagesData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "What's up?" },
  { id: 3, message: "How's your react lessons?" },
];

let dialogsElements = dialogsData.map((d) => (
  <DialogsItem name={d.name} id={d.id} />
));

let messagesElements = messagesData.map((m) => (
  <Message message={m.message} id={m.id} />
));

/* -------------------------------------------------------------- */

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
