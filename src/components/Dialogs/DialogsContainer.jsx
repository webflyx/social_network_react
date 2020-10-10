import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

  let state = props.store.getState();
 

  let addMessageFn = () => {
    props.store.dispatch(addMessageActionCreater());
  };

  let onMessageChange = (text) => {
    // props.store.dispatch(updateNewMessageTextActionCreater(text));
    let action = updateNewMessageTextActionCreater(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs updateNewMessageTextActionCreater = {onMessageChange} addMessageFn={addMessageFn} dialogsData={state.messagePage.dialogsData} messageData={state.messagePage.messageData} newMessageText={state.messagePage.newMessageText}/>
  );
}

export default DialogsContainer;
