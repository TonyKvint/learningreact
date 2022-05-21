import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

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

  export default DialogsItem;