import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API;

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const instance = config => {
  axios.create(config);
};

export default {
  axios,
  get: (path, config = {}) => {
    return axios.get(path, config);
  },
  post: (path, data, config = {}) => {
    return axios.post(path, data, config);
  },
  put: (path, data, config = {}) => {
    return axios.post(path, data, config);
  }
};
