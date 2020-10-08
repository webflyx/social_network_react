import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewText } from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateNewText={updateNewText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
