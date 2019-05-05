module.exports = {
  client: 'sqlite3',
  connection: {
    filename: 'dev.sqlite3',
  },
  migrations: {
    directory: 'src/database/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: 'src/database/seeds',
  },
  useNullAsDefault: true,
  debug: false,
}
