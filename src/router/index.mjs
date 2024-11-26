import Router from '@koa/router'
import routes from './routes.mjs'

const router = new Router()

routes.forEach(o => {
    router[o.method](o.url, o.controller)
})

export default router