// 引入axios，并加到原型链中
import axios from 'axios'

export let request = axios.create()

request.defaults.timeout = 5000 // 响应时间
request.defaults.headers.post['Content-Type'] = 'application/application-json;charset=UTF-8' // 配置请求头
request.defaults.baseURL = 'http://127.0.0.1:9999' // 配置接口地址

// 添加请求拦截器
request.interceptors.request.use(
  function(config) {
    console.log('发送请求')
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function(response) {
    console.log('收到响应')
    if (response.status === 200) {
      return response.data
    } else {
      return null
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
