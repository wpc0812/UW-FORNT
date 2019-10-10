import Vue from 'vue'
import Vuex from 'vuex'
import '../lib/sockjs'
import '../lib/stomp'
import initState from "./initState"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import modules from "./modules"
Vue.use(Vuex)

const store = new Vuex.Store({
  state:initState,
  mutations,
  actions,
  getters,
  modules:modules,
})
export default store
