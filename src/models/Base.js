import { Model } from 'objection'
import db from '../database/connection'

Model.knex(db)

export default Model
