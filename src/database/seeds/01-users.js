exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { name: 'Ricardo', email: 'my@mail.com', password: 'secret' },
        { name: 'Canelas', email: 'another@mail.com', password: 'secret' },
      ])
    })
}
