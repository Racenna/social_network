import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthSelector } from '../../../redux/authReducer';

const PrivateRoute = ({ component, ...rest }) => {
  const isAuth = useSelector(isAuthSelector);

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
