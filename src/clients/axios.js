import axios from "axios";
// import { app } from "main";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API;

const axiosApiInstance = axios;

/**
 * Request interceptor for API calls
 */
axiosApiInstance.interceptors.request.use(
  function(config) {
    /* attach token here
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      };
    }
    */
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for API calls
 * ทำหลังจากได้ผลรับ
 */
axiosApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function(error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      /* call refresh token
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axiosApiInstance(originalRequest);
      */
    }
    return Promise.reject(error);
  }
);

export const instance = config => {
  axiosApiInstance.create(config);
};

export default {
  axiosApiInstance,
  get: (url, config = {}) => {
    return axiosApiInstance({ url, method: "get", ...config });
  },
  delete: (url, config = {}) => {
    return axiosApiInstance({ url, method: "delete", ...config });
  },
  post: (url, data, config = {}) => {
    return axiosApiInstance({ url, method: "post", data, ...config });
  },
  put: (url, data, config = {}) => {
    return axiosApiInstance({ url, method: "put", data, ...config });
  }
};

/**
 * function for API call to get refresh token
 */
// async function refreshAccessToken() {}
