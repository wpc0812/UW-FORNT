import { GETUNDERWRITING } from '../constants/underwriting'
// import { getRequest, postRequest } from '@/utils/api'
import fetch from '../../fetch'
import url from '../../url'
let HOST ='/apis'
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
      // return postRequest(`/fridayService02/queryobject1`, data).then(res => {
      //   debugger
      //   commit(GETUNDERWRITING, res.data.data.data)
      //   return res
      // })
      console.log(url)
      console.log(fetch)
      console.log(HOST)
      fetch.post(HOST + url.uwmainGetUwList,data).then(data =>{
        commit(GETUNDERWRITING, data)
        return data
      })
    }
  }, 
}

export default underwriting