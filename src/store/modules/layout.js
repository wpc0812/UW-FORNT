import { INITMENU } from '../constants/layout'
import { getRequest } from '@/utils/api'

const layout = {
  state: {
    leftMenu: []
  },

  mutations: {
    [INITMENU](state, data) {
      state.leftMenu = data
    }
  },

  actions: {
    initMenu({ commit }) {
      return getRequest(`/api/menuData`).then(res => {
        commit(INITMENU, res.data.data)
      })
    }
  },

  // getters: {
  //   getMenu: state => {
  //     return state.leftMenu
  //   }
  // }
}

export default layout