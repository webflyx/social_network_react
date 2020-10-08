import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
}

export default ProfileInfo;
