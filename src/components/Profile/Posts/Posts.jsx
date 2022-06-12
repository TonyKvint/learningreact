import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postElements = props.postData.map((p) => (
    <Post message={p.message} id={p.id} likes={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let newPostText = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newPostText};
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
