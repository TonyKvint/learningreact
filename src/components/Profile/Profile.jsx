import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <PostsContainer profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
