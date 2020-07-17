import React, { Suspense } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
// Components
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/common/Preloader/Preloader";
// Style
import "./App.css";
// React.lazy
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={News} />
            <Route path="/musics" render={Musics} />
            <Route path="/settings" render={Settings} />
            <Route
              path="/login"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <LoginContainer />
                </Suspense>
              )}
            />
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
