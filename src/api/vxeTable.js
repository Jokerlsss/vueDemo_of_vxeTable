import request from '@/utils/request'

export function getActivityList (params) {
    return request({
        url: '/activity/listById',
        method: 'get',
        baseURL: 'http://jokerls.cn:9090',
        params: {
            userid: 1,
            flag: 0
        }
    })
}
