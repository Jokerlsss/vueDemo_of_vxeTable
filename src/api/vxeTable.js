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

export function getInfo_WuHan () {
    const timeStamp = new Date().getTime()
    return request({
        url: `g2/getOnsInfo?name=disease_h5&callback=&_=${timeStamp}`,
        method: 'get',
        baseURL: 'https://view.inews.qq.com/'
    })
}
