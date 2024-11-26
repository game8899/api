import Home from '../controller/home/index.mjs'
import Aomen from '../controller/aomen/index.mjs'
import AomenHistory from '../controller/aomenhistory/index.mjs'

const routes = [
    { method: 'get', url: '/', controller: Home.get },
    { method: 'get', url: '/api/getaomen', controller: Aomen.get },
    { method: 'get', url: '/api/getaomenhistory', controller: AomenHistory.get },
]

export default routes