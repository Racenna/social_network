import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../../App';

// const PrivateRoute = ({ children, ...rest }) => {
const PrivateRoute = ({ component, ...rest }) => {
  const isAuth = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
