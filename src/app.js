import Koa from 'koa'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import router from './routes'

const app = new Koa()

app
  .use(helmet())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
