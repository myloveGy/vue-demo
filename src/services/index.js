import {getApi, postApi} from '../utils/request'

// 页面相关
export const getPhpApi = () => getApi('/api/vue/php')
export const getIndexApi = () => getApi('/api/vue/index')
export const getInfoApi = () => getApi('/api/vue/info')

// API 创建相关
export const apiIndexApi = () => getApi('/api/api/index')
export const apiCreateApi = data => postApi('/api/api/create', data)
