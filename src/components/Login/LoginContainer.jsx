import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import Login from './Login';

const LoginContainer = (props) => {
  return <Login {...props} />;
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
