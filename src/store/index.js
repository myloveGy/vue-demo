import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        php: {
            version: "",
            os: ""
        },
        phpInfo: "",
        lists: []
    },

    mutations: {
        setPhp(state, object) {
            state.php = object;
        },
        setPhpInfo(state, info) {
            state.phpInfo = info;
        },
        setLists(state, lists) {
            state.lists = lists;
        }
    },

    getters: {
        php: (state) =>  {
            return state.php
        },
        phpInfo: (state) => {
            return state.phpInfo;
        }
    }
});