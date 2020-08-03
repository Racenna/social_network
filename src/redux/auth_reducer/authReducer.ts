import { authAPI, securityAPI } from '../../api/api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { stopSubmit } from 'redux-form';
import {
  AuthStateType,
  AuthActionTypes,
  GET_CAPTCHA_URL_SUCCESS,
  SET_USER_DATA,
} from './types';

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
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

export const setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): AuthActionTypes => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl: string): AuthActionTypes => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getUserData = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const response = await authAPI.getActiveUser();

    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserData(id, email, login, true));
    }
  } catch (error) {
    console.error('authReducer<getUserData>_error:', error);
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
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
  } catch (error) {
    console.error('authReducer<login>_error:', error);
  }
};

export const logout = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  } catch (error) {
    console.error('authReducer<logout>_error:', error);
  }
};

export const getCaptchaUrl = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
  } catch (error) {
    console.error('authReducer<getCaptchaUrl>_error:', error);
  }
};

export default authReducer;
