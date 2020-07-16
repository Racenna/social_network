import { createSelector } from "reselect";

export const getCurrentPage = (state) => {
  return state.usersData.currentPage;
};

export const getProfileUsers = (state) => {
  return state.usersData.users;
};

export const getPageSize = (state) => {
  return state.usersData.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersData.totalUsersCount;
};

export const getIsFetching = (state) => {
  return state.usersData.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersData.followingInProgress;
};

// export const getUsersSuper = createSelector((users) => {
//   return users.filter((u) => true);
// });

// export const getUsersSelector = (state) => {
//   return getProfileUsers.filter((u) => true);
// };

// export const getUsersSuperSelector = createSelector(
//   getProfileUsers,
//   getIsFetching,
//   (users) => {
//     return users.filter((u) => true);
//   }
// );
