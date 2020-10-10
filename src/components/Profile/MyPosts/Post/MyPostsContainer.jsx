import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../../redux/profile-reducer";
import StoreContext from "../../../../storeContext";
import MyPosts from "../MyPosts";


function MyPostsContainer() {


  return (
    <StoreContext.Consumer>
      { (store) => {
        console.log(store)
      let state = store.getState();
      let addPostFn = () => {
        store.dispatch(addPostActionCreater());
      };
    
      let onPostChange = (text) => {
        // let text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreater(text));
        let action = updateNewPostTextActionCreater(text);
        store.dispatch(action);
    
      };
      debugger;
      return(
      <MyPosts updateNewPostTextActionCreater = {onPostChange} addPostFn={addPostFn} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
      )}} 
  </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
