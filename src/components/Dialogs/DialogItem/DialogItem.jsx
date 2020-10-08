import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id}>
        <img src={props.ava} />
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
