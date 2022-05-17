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

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItem name="Anton" id="1" />
        <DialogsItem name="Veronica" id="2" />
        <DialogsItem name="Alexey" id="3" />
        <DialogsItem name="Brother" id="4" />
        <DialogsItem name="Mom" id="5" />
      </div>

      <div className={classes.messages}>
        <Message message="Hi!" />
        <Message message="What's up?" />
        <Message message="How's your react lessons?" />
      </div>
    </div>
  );
};

export default Dialogs;
