import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="http://norway-travel.com.ua/wp-content/uploads/2018/10/Northlight_square-600x600.jpg" alt="Avatar"></img>
      </div>
        <Posts />
    </div>
  );
};

export default Profile;
