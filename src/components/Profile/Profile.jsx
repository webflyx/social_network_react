import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} updateNewText={props.updateNewText} />
    </main>
  );
}

export default Profile;