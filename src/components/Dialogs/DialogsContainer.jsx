import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// function DialogsContainer() {

 
//   return (
//     <StoreContext.Consumer> 
//       { (store) => {
//         let state = store.getState();
 

//         let addMessageFn = () => {
//           store.dispatch(addMessageActionCreater());
//         };
      
//         let onMessageChange = (text) => {
//           // props.store.dispatch(updateNewMessageTextActionCreater(text));
//           let action = updateNewMessageTextActionCreater(text);
//           store.dispatch(action);
//         };
//         return(
//     <Dialogs updateNewMessageTextActionCreater = {onMessageChange} addMessageFn={addMessageFn} dialogsData={state.messagePage.dialogsData} messageData={state.messagePage.messageData} newMessageText={state.messagePage.newMessageText}/>
//     )}}
//   </StoreContext.Consumer>
//   );
// }

// export default DialogsContainer;

///////////////////////////////////////
let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagePage.dialogsData,
    messageData: state.messagePage.messageData,
    newMessageText: state.messagePage.newMessageText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageTextActionCreater: (text) => {
      let action = updateNewMessageTextActionCreater(text);
      dispatch(action);
    },
    addMessageFn: () => {
      dispatch(addMessageActionCreater())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;