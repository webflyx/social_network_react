import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";


function MyPostsContainer(props) {


  let state = props.store.getState();

  let addPostFn = () => {
    props.store.dispatch(addPostActionCreater());
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    // props.dispatch(updateNewPostTextActionCreater(text));
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);

  };


  return (
   <MyPosts updateNewPostTextActionCreater = {onPostChange} addPostFn={addPostFn} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
  );
}

export default MyPostsContainer;
