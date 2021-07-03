import Vue from "vue";
import Vuex from "vuex";
import camelCase from "lodash.camelcase";
import auth from "./auth";

let modules = {
  auth
};

Vue.use(Vuex);

const requireComponent = require.context("../pages", true, /(__contexts__\/store\/index\.js)$/);

requireComponent.keys().forEach(fileName => {
  const moduleConfig = requireComponent(fileName);

  const moduleName =
    moduleConfig?.default?.name ||
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")).replace(
      "ContextsStoreIndex",
      ""
    );
  modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
