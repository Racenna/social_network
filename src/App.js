import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profileData={props.state.profileData}
                setPost={props.setPost}
                setTextPost={props.setTextPost}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsData}
                setMessage={props.setMessage}
                setTextMessage={props.setTextMessage}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/musics" component={Musics} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
