import axios from "axios";
import { Loading } from "element-ui";
import { Message } from 'element-ui';
import utils from './utils'

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
    // loadService = Loading.service({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background:'rgba(0, 0, 0, 0.7)'
    // })
    const token =  window.sessionStorage.token ||utils.getUrlToken('token')
    if (token) {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      request.headers.jwttoken = token;
      request.headers.token = token;
    }
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
        // loadService.close()
        Message.error('接口返回错误')
        throw new Error();
    } else {

      // loadService.close()


      // Token更新

      // 1、接口响应结果为“登录过期”（状态码为16），则清除sessionstorage中的token，
      // 并携带当前业务系统前端的url，跳转单点登录，结果为“非登录过期”（状态码为16），
      // 且响应头中包含新的token，则将新的token（key为newjwt）存入sessionstorage 
      if (response.headers.newjwt) {
        window.sessionStorage.token = response.headers.newjwt
      }
      if(response.data.status == 0){
        return response.data.data
      } else if (response.data.status === 16) {
          if (window.sessionStorage.isSSO) {
            utils.removeToken()
            // window.location.href = '/#/login'
            window.location.reload()
          } else {
            utils.removeToken()
            window.location.href = window.sessionStorage.redirectUrl
          }
        } else {
            Message.error(response.data.statusText ||response.data.message)
            // throw new Error();
      }
       
    }
  },
  err => {
    // loadService.close()
   return Promise.reject(err);
  }
);

export default service;
