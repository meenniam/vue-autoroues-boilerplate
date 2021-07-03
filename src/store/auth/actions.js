import {
  SET_IS_AUTH,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from "./constant";

import { getUserService } from "services/auth.service";

export default {
  setIsAuth: ({ commit }) => {
    commit(SET_IS_AUTH);
  },
  getUserProfile: ({ commit }) => {
    try {
      commit(GET_USER_PROFILE);
      const result = getUserService();
      commit(GET_USER_PROFILE_SUCCESS, result);
    } catch (error) {
      commit(GET_USER_PROFILE_FAILURE, error.message);
    }
  }
};
