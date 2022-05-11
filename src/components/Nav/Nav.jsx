import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/Profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/Dialogs">Dialogs</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/News">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/Music">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/Settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;