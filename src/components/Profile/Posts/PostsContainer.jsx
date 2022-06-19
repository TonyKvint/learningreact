import React from 'react';
import Posts from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

const PostsContainer = (props) => {

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  
  return (
    <Posts 
      updateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={props.profilePage.postData} 
      newPostText={props.profilePage.newPostText}
      />
  );
};

export default PostsContainer;
