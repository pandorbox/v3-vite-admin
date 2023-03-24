import axios from 'axios'
import { useUserStore } from '@/store/user.js'
import { showLoadingToast, showFailToast, closeToast } from 'vant';
const api = axios.create({
    baseURL: import.meta.env.VITE_VUE_APP_URL,
    timeout: 10000,
    // responseType: 'application/x-www-form-urlencoded;charset=UTF-8'
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

api.interceptors.request.use(
    request => {
        /**
         * 全局拦截请求发送前提交的参数
         * 以下代码为示例，在请求头里带上 token 信息
         */
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
        });
        if (useUserStore().isLogin) {
            request.headers['authorization'] = useUserStore().getToken
        }
        return request
    }
)

api.interceptors.response.use(
    response => {
        closeToast()
        /**
         * 全局拦截请求发送后返回的数据，如果数据有报错则在这做全局的错误提示
         * 假设返回数据格式为：{ status: 1, error: '', data: '' }
         * 规则是当 status 为 1 时表示请求成功，为 0 时表示接口需要登录或者登录状态失效，需要重新登录
         * 请求出错时 error 会返回错误信息
         */
        return Promise.resolve(response.data)

    },
    error => {
        let message = error.message
        if (message == 'Network Error') {
            message = '系统升级中...'
        } else if (message.includes('timeout')) {
            message = '接口请求超时'
        } else if (message.includes('Request failed with status code')) {
            message = '接口' + message.substr(message.length - 3) + '异常'
        }
        showFailToast(message)
        return Promise.reject(error)
    }
)

export default api
