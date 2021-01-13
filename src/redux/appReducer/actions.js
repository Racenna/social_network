import { getUserData } from '../authReducer/index';

export const SET_INITIALIZED = 'app/SET_INITIALIZED';

const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};
