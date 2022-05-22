import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postElements = props.postData.map((p) => (
    <Post message={p.message} id={p.id} likes={p.likesCount} />
  ));

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
