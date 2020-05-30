import * as axios from "axios";
import env from "./../env";

const instance = axios.create({
  withCredentials: true,
  baseURL: env.BASE_URL,
  headers: {
    "API-KEY": env.API_KEY,
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  getActiveUser() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};
