import React, { Suspense, useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
// Components
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
// import LoginContainer from "./components/Login/LoginContainer";
import Preloader from './components/common/Preloader/Preloader';
// Style
import './App.css';
// React.lazy
const LoginContainer = React.lazy(() =>
  import('./components/Login/LoginContainer')
);

const App = (props) => {
  const { initialized, initializeApp } = props;

  useEffect(() => {
    function catchAllUnhandledErrors(reason, promise) {
      console.error('My error:', reason);
    }

    initializeApp();
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return function cleanup() {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, [initializeApp]);

  if (!initialized) {
    return <Preloader />;
  } else {
    return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/' render={() => <Redirect to='/profile' />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <Dialogs />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={News} />
          <Route path='/musics' render={Musics} />
          <Route path='/settings' render={Settings} />
          <Route
            path='/login'
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
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
