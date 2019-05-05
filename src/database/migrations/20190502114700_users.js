exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('name', 255).notNullable()
    table
      .string('email')
      .unique()
      .notNullable()
    table.string('password').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}

exports.config = { transaction: false }
