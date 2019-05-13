import {getApi} from '../utils/request'

export const getPhpApi = () => getApi('/api/vue/php')
export const getIndexApi = () => getApi('/api/vue/index')
export const getInfoApi = () => getApi('/api/vue/info')
