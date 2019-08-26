import { GETUNDERWRITING } from '../constants/underwriting'
import { getRequest, postRequest } from '@/utils/api'

const underwriting = {
  state: {
    list: []
  },

  mutations: {
    [GETUNDERWRITING](state, data) {
      state.list = data
    }
  },

  actions: {
    getUnderwriting({ commit }, data) {
      return postRequest(`/fridayService02/queryobject1`, data).then(res => {
        debugger
        commit(GETUNDERWRITING, res.data.data.data)
        return res
      })
    }
  },
}

export default underwriting