let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "i'm okey", likeCount: 12 },
        { id: 2, message: "Hi! How are you?", likeCount: 15 },
        { id: 3, message: "This my first post?", likeCount: 10 },
        { id: 4, message: "This my first post? 1111111", likeCount: 10 },
      ],
      newPostText: "webFlyX",
    },
    messagePage: {
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
    },
    sidebar: {
      friendsData: [
        { id: 1, name: "Sergei" },
        { id: 2, name: "Andrei" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Valera" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  callSubscribe() {
    console.log("states changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };

    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscribe(this._state);
  },
  updateNewText(updNewText) {
    this._state.profilePage.newPostText = updNewText;
    this._callSubscribe(this._state);
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
};

export default store;

window.store = store;
