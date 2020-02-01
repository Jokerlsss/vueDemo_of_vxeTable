import request from '@/utils/request'

export function addActivity (data) {
    return request({
        url: '/activity/insert',
        baseURL: 'http://jokerls.cn:9090',
        method: 'post',
        data
    })
}
