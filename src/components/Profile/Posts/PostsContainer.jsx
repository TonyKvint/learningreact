import React from 'react';
import Posts from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePost: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
