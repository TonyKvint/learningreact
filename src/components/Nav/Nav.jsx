import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const active = (navData) => (navData.isActive ? classes.active : "");

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink className={active} to="/Profile">
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={active} to="/Dialogs">
          Dialogs
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={active} to="/News">
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={active} to="/Music">
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={active} to="/Settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
