const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Sergei", avatar: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png" },
    { id: 2, name: "Andrei", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxUAaxOy8jnQYmYxXZOjcrq_iFW_Zjlbvv-A&usqp=CAU" },
    { id: 3, name: "Sveta", avatar: "https://icon-library.com/images/4_avatar-512.png" },
    { id: 4, name: "Valera", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTue0QzcbncaPSxMCpLhzOab4a1Sux6xXpow&usqp=CAU" },
    { id: 5, name: "Sasha", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuYQxLVy9mbm29K-9_XP09Jf1v8q6MLTtG-g&usqp=CAU" },
    { id: 6, name: "Kolya", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRreMcZBkJH8HScfuswuiCkxCvTu7Kf85z-rg&usqp=CAU" },
  ],
  messageData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo2" },
  ],
  newMessageText: "message-area",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.updNewMessage;
      return state;

    default:
      return state;
  }
};

export const addMessageActionCreater = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    updNewMessage: text,
  };
};

export default dialogsReducer;
