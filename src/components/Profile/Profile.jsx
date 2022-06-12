import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Posts postData={props.profilePage.postData}
             newPostText={props.profilePage.newPostText} 
             dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
