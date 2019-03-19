import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        countGet: state => {
            return state.count*state.count
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
