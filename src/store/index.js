import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout';
import underwriting from './modules/underwriting';
import getters from './getters'
import '../lib/sockjs'
import '../lib/stomp'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout,
    underwriting
  },
  getters
})
export default store
