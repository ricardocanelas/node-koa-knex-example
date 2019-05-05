const app = require('../app')
const request = require('supertest')

test('it workds', async () => {
  const response = await request(app.callback()).get('/')
  expect(response.status).toEqual(200)
})

test('route: users', async () => {
  const response = await request(app.callback()).get('/users')
  expect(response.status).toEqual(200)
})
