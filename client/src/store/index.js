import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CurCity: {
      name: "宁波",
      code: "101210400"
    },
    Loacation: {
      name: "宁波",
      code: "101210400"
    }
  },
  getters: {
    CurCity: (state) => {
      return state.CurCity.name
    },
    CurCity: (state) => {
      return state.CurCity.name
    },
  },
  mutations: {
    SetCurCity(state, city) {
      state.CurCity = city
    },
    SetLocation(state, loc) {
      state.Loacation = loc
    }
  },
  actions: {

  },
  modules: {
  }
})
