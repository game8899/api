import axios from 'axios'

const instance = axios.create({
    timeout: 8000
})

const req = (method) => {
    return (url, config = {}) => {
        return instance({
            method,
            url,
            ...config
        }).then(res => {
            const { data } = res
            return { res: data }
        }, err => ({ err }))
    }
}

export const GET = req('get')
export const POST = req('post')