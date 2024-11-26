import Koa from 'koa'
import cors from '@koa/cors'
import router from './router/index.mjs'

const port = 8089
const app = new Koa()

app.use(cors())
app.use(router.routes())

app.use(router.allowedMethods())

app.listen(port, () => console.log('server running on http://localhost:' + port))