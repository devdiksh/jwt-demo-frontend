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

const axiosClient = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});
axiosClient.defaults.withCredentials = true;

export { axiosClient };

export default new ApiClient(axiosClient);
