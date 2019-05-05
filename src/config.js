import dotenv from 'dotenv'

dotenv.config()

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3001,
  SECRET: process.env.SECRET || 'secret',
  DB_CLIENT: process.env.DB_CLIENT || 'sqlite3',
  DB_NAME: process.env.DB_NAME || 'personal_finance',
  DB_CONNECTION: process.env.DB_CONNECTION || false,
}
