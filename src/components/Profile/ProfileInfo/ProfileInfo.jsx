import classes from "./ProfileInfo.module.css";
import ava from "../../../img/ava.svg";

const ProfileInfo = (props) => {
  return (
    <div className={classes.ProfileInfo}>
      <img className={classes.ava} src={ava} alt={"user avatar"}></img>
      <div className={classes.profileName}>Anton</div>
      <div className={classes.profileAbout}>
        <p>Hi, I'm Anton!</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
