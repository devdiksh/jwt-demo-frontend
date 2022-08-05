import axios from "axios";
import config from "./config";

const baseURL = config.SERVER_BASE_URL;

class ApiClient {
  constructor(axiosInst) {
    this.axios = axiosInst;
  }

  makeRequest = (url, method, data = {}, params) =>
    this.axios({
      url,
      method,
      data,
      params,
    });

  getRequest = async (url, config, params) =>
    this.makeRequest(url, "GET", config, params);

  putRequest = (url, config) => this.makeRequest(url, "put", config);

  postRequest = async (url, config) => this.makeRequest(url, "post", config);

  deleteRequest = (url, config) => this.makeRequest(url, "delete", config);
}

const getAccessToken = () => window.localStorage.getItem("accessToken");

const getAxiosClient = () => {
  let clientConfig = {
    baseURL,
  };

  if (getAccessToken()) {
    clientConfig = {
      ...clientConfig,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    };
  }

  const axiosClient = axios.create({
    ...clientConfig,
  });
  axiosClient.defaults.withCredentials = true;

  return new ApiClient(axiosClient);
};

export { getAxiosClient, getAccessToken };

export default new ApiClient(getAxiosClient());
