import Router from 'koa-router'
import UserController from './controllers/UserController'

const router = new Router()

// **** INDEX
router.get('/', ctx => {
  ctx.body = 'Hello World!'
})

// **** USERS
router.get('/users', UserController.all)
router.get('/users/:id', UserController.get)
router.post('/users', UserController.save)

export default router
