import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '../selectors/headerSelectors';

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const isAuth = useSelector(isAuthSelector);
    if (!isAuth) return <Redirect to='/login' />;

    return <Component {...props} />;
  };

  return RedirectComponent;
};
