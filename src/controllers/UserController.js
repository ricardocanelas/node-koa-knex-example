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
        data = await User.query().patchAndFetchById(body.id, body)
      } else {
        data = await User.query().insert(body)
      }

      ctx.body = { data }
    } catch (err) {
      ctx.body = { status: 'error', message: err.message }
    }
  }
}

module.exports = new UserController()
