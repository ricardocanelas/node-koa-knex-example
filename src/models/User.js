import Base from './Base'

class User extends Base {
  static get tableName() {
    return 'users'
  }
}

export default User
