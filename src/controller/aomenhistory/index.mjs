import { GET } from '../../req/index.mjs'
class History {
    static async get(ctx) {
        const { query: { year } } = ctx
        let url = `https://kj.616363.com/kj`
        if (year) {
            url += `?year=${year}`
        }
        const data = []
        const { res } = await GET(url)
        if (res) {
            res.replace(/六合彩([^六合彩]+)/g, (a, b) => {
                let date = b.slice(0 , 20).split(' ')[1]
                if (date) {
                    date = date.replace(/\D/g, '-')
                    date = date.slice(0, date.length - 1)
                    const issue = b.split('期')[0].split(' ')[4].replace(/\D/g, '')
                    const nums = []
                    b.replace(/class="ball([^<]+)/g, (q, w) => {
                        nums.push(w.replace(/\D/g, ''))
                    })
                    data.push({ date, issue, nums })
                }
            })
        }
        ctx.body = {
            code: 200,
            data
        }
    }
}

export default History