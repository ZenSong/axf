import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state
import state from './state'
// actions
import actions from './actions'
// mutations
import mutations from './mutations'

export default new Vuex.Store({
  state,
  actions,
  mutations
})