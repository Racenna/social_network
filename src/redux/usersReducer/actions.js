import { usersAPI } from '../../api/api';

export const FOLLOW_UNFOLLOW = 'users/FOLLOW_UNFOLLOW';
export const SET_USERS = 'users/SET_USERS';
export const SET_PAGE = 'users/SET_PAGE';
export const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS =
  'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const followAndUnfollow = (userId) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
});

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

const setCurrentPage = (currentPage) => ({
  type: SET_PAGE,
  currentPage,
});

const setTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const toggleIsFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
  dispatch(toggleIsFollowingInProgress(true, userId));

  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(followAndUnfollow(userId));
  }
  dispatch(toggleIsFollowingInProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI));
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI));
};
