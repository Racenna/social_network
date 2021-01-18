export const getCurrentPageSelector = (state) => state.usersData.currentPage;

export const getProfileUsersSelector = (state) => state.usersData.users;

export const getPageSizeSelector = (state) => state.usersData.pageSize;

export const getTotalUsersCountSelector = (state) =>
  state.usersData.totalUsersCount;

export const getIsFetchingSelector = (state) => state.usersData.isFetching;

export const getFollowingInProgressSelector = (state) =>
  state.usersData.followingInProgress;
