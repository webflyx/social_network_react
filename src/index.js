import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContext, { Provider } from "./storeContext";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

{
  /* <App store={store} appState={state} dispatch={store.dispatch.bind(store)} /> */
}
