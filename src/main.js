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
// import { postRequest, getRequest, deleteRequest, putRequest} from './utils/api'
// import axios from 'axios'
// Vue.prototype.$axios = axios;
// Vue.prototype.HOST = "/apis"

Vue.prototype.HOST = ""
import fetch from "./fetch";
import Url from './url'
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

// Vue.prototype.getRequest = getRequest;
// Vue.prototype.postRequest = postRequest;
// Vue.prototype.deleteRequest = deleteRequest;
// Vue.prototype.putRequest = putRequest;
Vue.prototype.$fetch = fetch;
Vue.prototype.$url = Url;
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
