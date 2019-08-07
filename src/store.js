import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [],
    num: 0
  },
  mutations: {
    updateData (state, data) {
      state.dataList = [...state.dataList, ...data]
      state.num++
      console.log(state.num)
    }
  },
  getters: {
    getAverage: state => {
      let avg // 平均值
      let len = 0 // 个数
      let sum = 0 // 和
      if (state.dataList.length === 0) return 0
      state.dataList.forEach(t => {
        len += 1
        sum += t.data
      })
      avg = (sum / len).toFixed(2)
      return avg
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall ({ commit, state }) {
      // TODO
      mockGenerator(state.num * 20, (state.num + 1) * 20).then(data => {
        commit('updateData', data)
      })
    }
  }
})
