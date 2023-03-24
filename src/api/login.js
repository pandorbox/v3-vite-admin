import request from '@/utils/request.js'
// 登录
export function login(data) {
    return request({
        url: '/merchant/enum/getType',
        method: 'POST',
        data
    })
}