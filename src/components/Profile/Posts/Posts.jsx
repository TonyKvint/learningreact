import classes from "./Posts.module.css";
import Post from "./Post/Post";

/* -------------------------------------------------------------- */

let postData = [
  {id: 1, message: "Hi, how are you?", likesCount: 2},
  {id: 2, message: "It's my first post", likesCount: 19},
  {id: 3, message: "Hey, everyone!", likesCount: 5}
];

let postElements = postData.map((p) => (
  <Post message={p.message} id={p.id} likes={p.likesCount} />
));

/* -------------------------------------------------------------- */

const Posts = () => {
  return (
    <div>
      <div className={classes.messageInputBlock}>
        <div>
          <textarea placeholder="Write a message..."></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default Posts;
