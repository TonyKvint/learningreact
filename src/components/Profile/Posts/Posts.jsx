import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

const Posts = (props) => {
  let postElements = props.postData.map((p) => (
    <Post message={p.message} id={p.id} likes={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      <div className={classes.messageInputBlock}>
        <div>
          <textarea placeholder="Write a message..." onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default Posts;
