
import axios from 'axios'
import { Message } from 'element-ui'
import { errMsg } from '@/assets/js/baseCode'

const api = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 300000
})

api.interceptors.request.use(config => {
  return config;
}, err => {
  Message.error({ message: '请求超时!' });
  return Promise.resolve(err);
})
api.interceptors.response.use(data => {

  return data;
}, err => {
  if(err && err.response && err.response.status){
    let msg = errMsg.find(item => {
      return item.code == err.response.status
    })
    if (msg && msg.value) {
      Message({
        type: 'error',
        showClose: true,
        message: msg.value
      })
    }
  }

  return Promise.resolve(err);
})

// 接口api
export const postRequest = (url, params) => {
  return api({
    method: 'post',
    url,
    data: params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
}
export const uploadFileRequest = (url, params) => {
  return api({
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const putRequest = (url, params) => {
  return api({
    method: 'put',
    url,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const deleteRequest = (url) => {
  return api({
    method: 'delete',
    url
  });
}
export const getRequest = (url) => {
  return api({
    method: 'get',
    url
  });
}

