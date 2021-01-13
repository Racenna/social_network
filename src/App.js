import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initializeApp, initializedSelector } from './redux/appReducer/index';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import Preloader from './components/common/Preloader/Preloader';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import './App.css';
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
      <Router>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route
              path='/'
              exact
              component={() => <Redirect to='/profile' />}
            />
            <PrivateRoute
              path='/profile/:userId?'
              component={<ProfileContainer />}
            />
            <PrivateRoute path='/dialogs' component={<Dialogs />} />
            <PrivateRoute path='/users' component={<UsersContainer />} />
            <Route path='/news' component={News} />
            <Route path='/musics' component={Musics} />
            <Route path='/settings' component={Settings} />
            <Route
              path='/login'
              component={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
