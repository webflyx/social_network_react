import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { createRef } from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/state";

function Dialogs(props) {
  let DialogsElement = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.avatar} />);

  let messageElement = props.messageData.map((message) => <Message message={message.message} />);

  let newMessageEl = React.createRef();
 

  let addMessageFn = () => {
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = (e) => {
    
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreater(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElement}</div>
      <div className={s.messages}>
        {messageElement}
        <div>
          <textarea placeholder="Enter message" onChange={onMessageChange} value={props.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={addMessageFn}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
