import { usersAPI } from '../../api/api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  UsersStateType,
  UsersActionTypes,
  UserType,
  FOLLOW_UNFOLLOW,
  SET_PAGE,
  SET_TOTAL_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from './types';

const initialState: UsersStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (
  state = initialState,
  action: UsersActionTypes
): UsersStateType => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users.map((user) => {
          return { ...user, photos: { ...user.photos } };
        }),
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
      };
    default:
      return state;
  }
};

/* Action Creator */
export const followAndUnfollow = (userId: number): UsersActionTypes => ({
  type: FOLLOW_UNFOLLOW,
  userId,
});

export const setUsers = (users: Array<UserType>) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (currentPage: number) => ({
  type: SET_PAGE,
  currentPage,
});

export const setTotalCount = (totalUsersCount: number) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});

export const toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleIsFollowingInProgress = (
  isFetching: boolean,
  userId: number
) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: {
    isFetching,
    userId,
  },
});

/* Thunk */
export const getUsers = (
  currentPage: number,
  pageSize: number
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      // TODO: Change type any
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};

export const follow = (
  userId: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI));
};

export const unfollow = (
  userId: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any
) => {
  // Change type any in dispatch and apiMethod
  try {
    dispatch(toggleIsFollowingInProgress(true, userId));

    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
      dispatch(followAndUnfollow(userId));
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
  } catch (error) {
    console.error('usersReducer<followUnfollowFlow>_error:', error);
  }
};

export default usersReducer;
