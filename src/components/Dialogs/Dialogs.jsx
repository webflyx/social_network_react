import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { createRef } from "react";

function Dialogs(props) {
  let DialogsElement = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.avatar} />);

  let messageElement = props.messageData.map((message) => <Message message={message.message} />);

  let newMessageEl = React.createRef();

  let addMessage = () => {
    let text = newMessageEl.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElement}</div>
      <div className={s.messages}>
        {messageElement}
        <div>
          <textarea ref={newMessageEl}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
