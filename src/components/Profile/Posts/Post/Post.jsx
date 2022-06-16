import React from 'react';
import classes from "./Post.module.css";
import ava from "../../../../img/ava.svg";
import like from "../../../../img/like.png";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img className={classes.ava} src={ava} alt={"user avatar"}></img>
      <p className={classes.message}>{props.message}</p>
      <div>
        <span className={classes.likes}>
          {props.likes}&nbsp;
          <img className={classes.like} src={like}></img>
        </span>
      </div>
    </div>
  );
};

export default Post;