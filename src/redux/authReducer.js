import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

/* Action creator */
export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

/* Thunk */
export const getUserData = () => {
  return (dispatch) => {
    authAPI.getActiveUser().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getUserData());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
