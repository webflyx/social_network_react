import React from "react";
import s from "./Post.module.css";

function Post(props) {
  
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;
