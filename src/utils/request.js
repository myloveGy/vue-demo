import axios from 'axios'

export const request = (option) => {
  return new Promise((resolve, reject) => {
    axios(option).then(v => {
      if (v.status == 'success' && v.code === 200) {
        resolve(v.data.data)
      } else {
        reject(v)
      }
    }).catch(e => {
      reject(e)
    })
  })
}

/**
 * 发送get 请求
 * @param {string} url
 * @param {object} data
 * @param {object} options
 * @returns {Promise<any>}
 */
export const getApi = (url, data = {}, options = {}) => {
  const params = {
    url,
    data,
    method: 'get',
    ...options,
  }

  return request(params)
}

/**
 * 发送 post 请求
 * @param {string} url
 * @param {object} data
 * @param {object} options
 * @returns {Promise<any>}
 */
export const postApi = (url, data = {}, options = {}) => {
  const params = {
    url,
    data,
    method: 'post',
    ...options,
  }

  return request(params)
}

