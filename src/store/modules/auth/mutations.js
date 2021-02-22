import {
  SET_IS_AUTH,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from "./constant";

export default {
  [SET_IS_AUTH]: state => {
    state.isAuth = !state.isAuth;
  },
  [GET_USER_PROFILE]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [GET_USER_PROFILE_SUCCESS]: (state, payload) => {
    state.isFetching = false;
    state.error = null;
    state.user = payload;
  },
  [GET_USER_PROFILE_FAILURE]: (state, payload) => {
    state.isFetching = false;
    state.error = payload;
  }
};
