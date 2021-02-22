import Vue from "vue";
import upperFirst from "lodash.upperfirst";
import camelCase from "lodash.camelcase";

const requireComponent = require.context(".", true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")));

  Vue.component(componentName, componentConfig.default || componentConfig);
});
