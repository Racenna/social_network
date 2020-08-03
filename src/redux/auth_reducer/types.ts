export const SET_USER_DATA = 'auth/SET_USER_DATA';
export const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export interface AuthStateType {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
  captchaUrl: string | null;
}

// Payload
export interface SetUserDataPayloadType {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
}

export interface GetCaptchaUrlSuccessPayloadType {
  captchaUrl: string | null;
}

// Actions

interface SetUserDataActionType {
  type: typeof SET_USER_DATA;
  payload: SetUserDataPayloadType;
}

interface GetCaptchaUrlSuccessActionType {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: GetCaptchaUrlSuccessPayloadType;
}

// All actions

export type AuthActionTypes =
  | SetUserDataActionType
  | GetCaptchaUrlSuccessActionType;
