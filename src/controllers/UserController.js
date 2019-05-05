import User from '../models/User'

class UserController {
  async all(ctx) {
    const data = await User.query()
    ctx.body = { data }
  }

  async get(ctx) {
    const data = await User.query().where({ id: ctx.params.id })
    ctx.body = { data }
  }

  async save(ctx) {
    try {
      let data = null
      const body = ctx.request.body
      if (body.id) {
        data = await User.query()
          .update(null, body)
          .where('id', body.id)
      } else {
        data = await User.query().insert(body)
      }

      ctx.body = { data }
    } catch (err) {
      ctx.body = { status: 'error' }
    }
  }
}

module.exports = new UserController()
