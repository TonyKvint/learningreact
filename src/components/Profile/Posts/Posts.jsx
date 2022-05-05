import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" likes="193"/>
      <Post message="It's my first post" likes="205"/>
    </div>
  );
};

export default Posts;
