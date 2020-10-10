const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "i'm okey", likeCount: 12 },
    { id: 2, message: "Hi! How are you?", likeCount: 15 },
    { id: 3, message: "This my first post?", likeCount: 10 },
    { id: 4, message: "This my first post? 1111111", likeCount: 10 },
  ],
  newPostText: "webFlyX",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.updNewText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    updNewText: text,
  };
};

export default profileReducer;
