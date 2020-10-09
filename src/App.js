import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friendDatabase={props.appState.sidebar.friendsData} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.appState.messagePage.dialogsData} dispatch={props.dispatch} messageData={props.appState.messagePage.messageData} newMessageText={props.appState.messagePage.newMessageText} />} />
          <Route path="/profile" render={() => <Profile postData={props.appState.profilePage.postData} dispatch={props.dispatch} newPostText={props.appState.profilePage.newPostText} newMessageText={props.newMessageText} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />

          {/* <Route path="/settings" component={Settings} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Nav friendsData={props.appState.sidebar.friendsData} /> */
}
