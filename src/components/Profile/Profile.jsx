import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer  />
    </main>
  );
}

export default Profile;

// <MyPostsContainer postData={props.postData} dispatch={props.dispatch} newPostText={props.newPostText} updateNewText={props.updateNewText} />