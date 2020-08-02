import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getUserData = () => async (dispatch) => {
  const response = await authAPI.getActiveUser();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    dispatch(getUserData());
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message =
      response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
