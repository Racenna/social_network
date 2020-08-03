export const FOLLOW_UNFOLLOW = 'users/FOLLOW_UNFOLLOW';
export const SET_USERS = 'users/SET_USERS';
export const SET_PAGE = 'users/SET_PAGE';
export const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS =
  'users/TOGGLE_IS_FOLLOWING_PROGRESS';

interface PhotosType {
  small: string;
  large: string;
}

export interface UserType {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
}

export interface UsersStateType {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
}

// payloads

interface ToggleIsFollowingProgressPayloadType {
  isFetching: boolean;
  userId: number;
}

// actions
interface FollowUnfollowActionType {
  type: typeof FOLLOW_UNFOLLOW;
  userId: number;
}

interface SetUsersActionType {
  type: typeof SET_USERS;
  users: Array<UserType>;
}

interface SetPageActionType {
  type: typeof SET_PAGE;
  currentPage: number;
}

interface SetTotalCountActionType {
  type: typeof SET_TOTAL_COUNT;
  totalUsersCount: number;
}

interface ToggleIsFetchingActionType {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
}

interface ToggleIsFollowingProgressActionType {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  payload: ToggleIsFollowingProgressPayloadType;
}

// all actions
export type UsersActionTypes =
  | FollowUnfollowActionType
  | SetUsersActionType
  | SetPageActionType
  | SetTotalCountActionType
  | ToggleIsFetchingActionType
  | ToggleIsFollowingProgressActionType;
