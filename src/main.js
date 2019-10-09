import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.min.css'
// import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import '@/assets/js/filter.js'
import '@/assets/js/common.js'
import VueI18n from 'vue-i18n'
import zh from '@/assets/js/lang/zh'
import en from '@/assets/js/lang/en'
import fetch from "./fetch";
import Url from './url'
import utils from './utils'
import { from } from 'rxjs'
import axios from 'axios'
import { Message } from 'element-ui';
// import { postRequest, getRequest, deleteRequest, putRequest} from './utils/api'

// Vue.prototype.$axios = axios;
// Vue.prototype.HOST = "/apis/underwrite"

Vue.prototype.HOST = ""

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small'})

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': zh,   // 中文语言包
      'en-US': en   // 英文语言包
    }
})
Vue.prototype.$fetch = fetch;
Vue.prototype.$url = Url;
// Vue.prototype.getRequest = getRequest;
// Vue.prototype.postRequest = postRequest;
// Vue.prototype.deleteRequest = deleteRequest;
// Vue.prototype.putRequest = putRequest;


// 单点登录拦截
router.beforeEach((to, from, next) =>{

  // // 判断是否有token,包括url携带参数或者本地存储token
  // const token = to.query.token || window.sessionStorage.token ||utils.getUrlToken('token')
  // const whiteList = ['/login'] // no redirect whitelist


  // let isSSO
  // //调用isSSOLogin接口
  //     axios({
  //       method: 'post',
  //       url: '/getIsSsoLogin',
  //       data: {}
  //     })
  //     .then(data =>{
  //       debugger
  //       if(data.data.status == 0){
  //         // 判断是否为单点登录
  //         isSSO = data.data.data.isSsoLogin

  //         window.sessionStorage.setItem('isSSO', isSSO)
  //         axios({
  //                 method: 'post',
  //                 url: 'getRedirectUrl',
  //                 data: {}
  //               }).then(data => {
  //                 if (data.data.status === 0) {
  //                   window.sessionStorage.setItem('redirectUrl', data.data.data.redirectUrl)
  //                   if (token && isSSO) {
  //                         // 如果是通过单点系统跳进来的页面 to.query.token肯定存在
  //                         if (to.query.token || utils.getUrlToken('token')) {
  //                           window.sessionStorage.setItem('token', token)
                          
  //                           next()
  //                           // to.query.token不存在，子系统路由跳转
  //                         }  
  //                         else {
  //                             if (to.path === '/login' && from.path === '/dashboard') {                
  //                               next(false)
  //                             } 
  //                             else {
  //                               next()
  //                           }
  //                         }                     
  //                     } else{
  //                       if (isSSO) {
  //                             window.location.href = window.sessionStorage.redirectUrl
  //                           } else {
  //                             //非单点登陆的操作
                              
  //                               /* has no token*/
  //                               if (whiteList.indexOf(to.path) !== -1) {
  //                                 // in the free login whitelist, go directly
  //                                 next()
  //                               } else {
  //                                 // other pages that do not have permission to access are redirected to the login page.
  //                                 next(`/login?redirect=${to.path}`)
                                
  //                               }
                              
  //                           }
  //                     }
  //                 } 
  //                 else {
                  
  //                   Message.error(data.data.statusText || 'Error')
  //                 }
  //             })
      
  //       }else {
  //         Message.error(data.data.statusText || 'Error')
  //       }
  //   })

  
next()
  
  
})







new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
