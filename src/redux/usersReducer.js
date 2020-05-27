const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const followAndUnfollowActionCreator = (userId) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
});

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_PAGE,
  currentPage,
});

export const setTotalCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
});

export const toggleIsFetchingActionCreator = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default usersReducer;
