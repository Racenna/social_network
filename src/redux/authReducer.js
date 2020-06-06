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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

/* Action creator */
export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

/* Thunk */
export const logIn = () => {
  return (dispatch) => {
    authAPI.getActiveUser().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
