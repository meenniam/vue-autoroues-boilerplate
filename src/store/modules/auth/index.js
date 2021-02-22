import actions from "./actions";
import mutations from "./mutations";

const state = {
  isAuth: false,
  user: {},
  isFetching: false,
  error: null
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
