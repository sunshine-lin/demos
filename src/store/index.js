import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count: 0,
        obj: {
            name: 'zhangsan',
            age: 44
        }
    },
    getters: {
        countGet: state => {
            return state.count*state.count
        }
    },
    mutations: {
        increment (state,data) {
            console.log('data',data)
            Vue.set(state.obj,'age',data.num)
            state.count++
        }
    },
    actions: {
        incrementAsync ({ commit },data) {
            setTimeout(() => {
                commit('increment',data)
            }, 1000)
        }
    }
}
const moduleB = {
    namespaced: true,
    state: {
        count: 0,
        obj: {
            name: 'zhangsan',
            age: 44
        }
    },
    getters: {
        countGet: state => {
            return state.count*state.count
        }
    },
    mutations: {
        increment (state,data) {
            console.log('data',data)
            Vue.set(state.obj,'age',data.num)
            state.count++
        }
    },
    actions: {
        incrementAsync ({ commit },data) {
            setTimeout(() => {
                commit('increment',data)
            }, 1000)
        }
    }
}
export default new Vuex.Store({
    state: {
        count: 0,
        obj: {
            name: 'zhangsan',
            age: 44
        }
    },
    getters: {
        countGet: state => {
            return state.count*state.count
        }
    },
    mutations: {
        increment (state,data) {
            console.log('data',data)
            Vue.set(state.obj,'age',data.num)
            state.count++
        }
    },
    actions: {
        incrementAsync ({ commit },data) {
            setTimeout(() => {
                commit('increment',data)
            }, 1000)
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
})
