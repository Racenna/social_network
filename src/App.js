import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={News} />
          <Route path="/musics" render={Musics} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
