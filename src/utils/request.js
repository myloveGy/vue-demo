import axios from 'axios'
import {get} from './helper'

export const request = (option) => {
  return new Promise((resolve, reject) => {
    axios(option).then(v => {
      const response = get(v, 'data')
      if (get(response, 'status') == 'success' && get(response, 'code') === 200) {
        resolve(get(response, 'data'))
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

