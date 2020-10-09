import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



function MyPosts(props) {
  let postsElement = props.postData.map((post) => <Post message={post.message} likeCount={post.likeCount} />);

  let newPostElement = React.createRef();

  let addPostFn = () => {
    props.dispatch(addPostActionCreater());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreater(text));
  };

  return (
    <div className={s.postsBlock}>
      <h3>My all posts</h3>
      <div className={s.item}>new post</div>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPostFn}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
