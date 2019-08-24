import {errHandle} from './err'

export const Process = (fn, defaultOptions = {}) => {

  // 设置默认错误处理
  const options = {
    error: errHandle,
    ...defaultOptions,
  }

  return (async () => {
    return await fn()
  })().then(json => json).catch(e => {
    options.error && options.error(e)
    throw e
  })
}
