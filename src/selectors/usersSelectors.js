// import { createSelector } from "reselect";

export const getCurrentPageSelector = (state) => {
  return state.usersData.currentPage;
};

export const getProfileUsersSelector = (state) => {
  return state.usersData.users;
};

export const getPageSizeSelector = (state) => {
  return state.usersData.pageSize;
};

export const getTotalUsersCountSelector = (state) => {
  return state.usersData.totalUsersCount;
};

export const getIsFetchingSelector = (state) => {
  return state.usersData.isFetching;
};

export const getFollowingInProgressSelector = (state) => {
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
