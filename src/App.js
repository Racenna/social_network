import React, { Suspense, useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import { initializedSelector } from './selectors/appSelectors';
// Components
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import Preloader from './components/common/Preloader/Preloader';
// Style
import './App.css';
// React.lazy
const Login = React.lazy(() => import('./components/Login/Login'));

const App = () => {
  const initialized = useSelector(initializedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    function catchAllUnhandledErrors(reason, promise) {
      console.error('My error:', reason);
    }

    dispatch(initializeApp());
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return function cleanup() {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, [dispatch]);

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
                <Login />
              </Suspense>
            )}
          />
        </div>
      </div>
    );
  }
};

export default compose(withRouter)(App);
