import axios from "axios";
import { Loading } from "element-ui";
import { Message } from 'element-ui';
// import qs from "qs"

let config = {
  baseURL: '', //请求后端地址设置
  timeout: 300 * 1000 // 超时时间设置
  // withCredentials: true// 是否跨域
};

const service = axios.create(config);
let loadService = "";
service.interceptors.request.use(
  request => {
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
        Message.error('接口返回错误')
        throw new Error();
    } else {
        return response.data
    }
  },
  err => {
   
    return Promise.reject(err);
  }
);

export default service;
