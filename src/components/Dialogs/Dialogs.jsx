import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/Dialogs/" + props.id;
  const active = (navData) => (navData.isActive ? classes.active : "");

  return (
    <div className={classes.item}>
      <NavLink className={active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

/* Массивы данных, позже они будут вынесены отдельно, не пугайся */

let dialogsData = [
  {id: 1, name: 'Anton'},
  {id: 2, name: 'Veronica'},
  {id: 3, name: 'Alexey'},
  {id: 4, name: 'Brother'},
  {id: 5, name: 'Mom'}
];

let messagesData = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "What's up?"},
  {id: 3, message: "How's your react lessons?"}
];

/* -------------------------------------------------------------- */

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>

      <div className={classes.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
