import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    text: 'Жопа'
  },
  getters: {
    text: s => s.text
  },
})