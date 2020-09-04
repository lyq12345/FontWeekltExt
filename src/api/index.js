/*
 * @Author: your name
 * @Date: 2020-08-05 14:01:43
 * @LastEditTime: 2020-08-05 15:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-extension2/src/api/index.js
 */
import axios from '../utils/request.js'

export const saveInfo = (options) =>
  axios.request({
    ...options,
    url: '/saveInfo',
  })

export const getAllInfo = (options) =>
  axios.request({
    ...options,
    url: '/getAllInfo',
  })

export default {}
