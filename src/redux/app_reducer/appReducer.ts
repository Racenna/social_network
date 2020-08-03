import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { getUserData } from '../auth_reducer/authReducer';
import { AppStateType, AppActionTypes, SET_INITIALIZED } from './types';

const initialState: AppStateType = {
  initialized: false,
};

const appReducer = (
  state = initialState,
  action: AppActionTypes
): AppStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialized = (): AppActionTypes => ({ type: SET_INITIALIZED });

export const initializeApp = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch) => {
  let promise = dispatch(getUserData());
  // dispatch something else
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;
