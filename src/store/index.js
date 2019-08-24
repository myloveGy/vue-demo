import Vue from 'vue'
import Vuex from 'vuex'
import {Process, get} from '@/utils'
import {getIndexApi, getInfoApi, getPhpApi} from '@/services'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    php: {
      version: '',
      os: '',
    },
    phpInfo: '',
    list: {
      load: false,
      data: [],
    },
  },

  // 异步请求
  actions: {
    // 获取php版本信息
    getPhpAction({commit, state}) {
      // 加载过一次，不在加载
      if (state.php.version) {
        return Promise.resolve(true)
      }

      Process(async () => {
        const data = await getPhpApi()
        commit('setPhp', data)
      })
    },

    // 获取PHP信息
    getPhpInfoAction({commit, state}) {
      // 加载过一次，不在加载
      if (state.phpInfo) {
        return Promise.resolve(true)
      }

      Process(async () => {
        await getInfoApi()
      }, {error: false}).catch(e => {
        if (get(e, 'status') === 200 && get(e, 'statusText') === 'OK') {
          commit('setPhpInfo', get(e, 'data'))
        } else {
          console.info('error', e)
        }
      })
    },


    // 获取列表数据
    getListAction({commit, state}) {
      // 加载过一次，不在加载
      if (state.list.load === true) {
        return Promise.resolve(true)
      }

      commit('setList', {load: true})

      // 请求接口获取数据
      Process(async () => {
        const data = await getIndexApi()
        commit('setList', {data})
      }).then(json => console.info(json))
    },
  },

  // 同步赋值
  mutations:
    {
      setPhp(state, object) {
        state.php = object
      }
      ,
      setPhpInfo(state, info) {
        state.phpInfo = info
      }
      ,
      setList(state, data) {
        state.list = {
          ...state.list,
          ...data,
        }
      }
      ,
    }
  ,

// 计算属性
  getters: {
    php: (state) => {
      return state.php
    },
    phpInfo:
      (state) => {
        return state.phpInfo
      },
  }
  ,
})
