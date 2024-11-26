import { GET } from '../../req/index.mjs'
class Aomen {
    static async get(ctx) {
        const url = `https://zhibo.sunstarshost.com:777/js/i1i1i1i1i1l1l1l1l0.js?_=${+new Date()}`
        const { res, err } = await GET(url)
        if (res) {
            const arr = res.k?.split(',')
            const tt = arr[12].replace(/\D+/g, '-').split('-')
            const timestr = `${arr[0].slice(0, 4)}-${arr[9]}-${arr[10]} ${tt[0]}:${tt[1]}:00`
            const obj = {
                k: res.k,
                issue: arr[0],
                open_num: arr.slice(1, 8),
                next_issue: arr[8],
                next_date: timestr,
                next_time: +new Date(timestr)
            }
            ctx.body = {
                code: 200,
                data: obj
            }
        } else {
            ctx.body = {
                code: 209,
                data: '请求出错'
            }
        }
    }
}

export default Aomen