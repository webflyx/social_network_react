import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friendDatabase={props.appState.sidebar.friendsData} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={() => <Profile store={props.store} />} />
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
