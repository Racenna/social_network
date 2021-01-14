import { authAPI, securityAPI } from '../../api/api';

export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';
export const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';

const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  payload: { errorMessage },
});

const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getUserData = () => async (dispatch) => {
  const response = await authAPI.getActiveUser();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setUserData(id, email, login, true));
  }
};

const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
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
    dispatch(setErrorMessage(message));
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
