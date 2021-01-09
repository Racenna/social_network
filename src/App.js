import React, { createContext, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { initializedSelector } from './selectors/appSelectors';
import { isAuthSelector } from './selectors/headerSelectors';
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
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
// Style
import './App.css';
// React.lazy
const Login = React.lazy(() => import('./components/Login/Login'));

export const AuthContext = createContext();

const App = () => {
  const initialized = useSelector(initializedSelector);
  const isAuth = useSelector(isAuthSelector);

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
      <AuthContext.Provider value={isAuth}>
        <Router>
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Route path='/' exact render={() => <Redirect to='/profile' />} />
              {/* <Route 
                path='/profile/:userId?' 
                render={() => <ProfileContainer />} 
              /> */}
              <PrivateRoute
                path='/profile/:userId?'
                component={<ProfileContainer />}
              />
              {/* <Route path='/dialogs' render={() => <Dialogs />} /> */}
              <PrivateRoute path='/dialogs' component={<Dialogs />} />
              {/* <Route path='/users' render={() => <UsersContainer />} /> */}
              <PrivateRoute path='/users' component={<UsersContainer />} />
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
        </Router>
      </AuthContext.Provider>
    );
  }
};

export default App;
