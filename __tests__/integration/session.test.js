const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models')

describe('Autetication', () => {
  it('should auteticate with valid credentials', async() => {
    const user = await User.create({
      name: 'Alberto',
      email: 'albertoparentefh@gmail.com',
      password_hash: '123456789'
    })
    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456789'
      })
    expect(response.status).toBe(200)
  })
})