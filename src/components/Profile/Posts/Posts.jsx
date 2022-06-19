import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {

  let postElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likesCount} />
  ));

  let newPostElement = React.createRef();


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }


  return (
    <div>
      <div className={classes.messageInputBlock}>
        <div>
          <textarea placeholder="Write a message..." onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default Posts;
