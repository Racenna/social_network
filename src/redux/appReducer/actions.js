import { getUserData } from '../authReducer';

export const SET_INITIALIZED = 'app/SET_INITIALIZED';

const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getUserData());
  promise.then(() => {
    dispatch(setInitialized());
  });
};
