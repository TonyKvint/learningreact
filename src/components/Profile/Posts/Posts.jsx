import classes from "./Posts.module.css";
import Post from "./Post/Post";

/* Массив данных, позже он будет вынесен отдельно, не пугайся */

let postData = [
  {id: 1, message: "Hi, how are you?", likesCount: 19},
  {id: 1, message: "It's my first post", likesCount: 5}
];

/* -------------------------------------------------------------- */

const Posts = () => {
  return (
    <div>
      <div className={classes.messageInputBlock}>
        <div><textarea placeholder="Write a message..."></textarea></div>
        <div><button>Send</button></div>
      </div>
      <Post message={postData[0].message} id={postData[0].id} likes={postData[0].likesCount} />
      <Post message={postData[1].message} id={postData[1].id} likes={postData[1].likesCount} />
    </div>
  );
};

export default Posts;
