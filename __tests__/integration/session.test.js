const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('Autetication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should auteticate with valid credentials', async() => {
    const user = await User.create({
      name: 'Alberto',
      email: 'albertoparentefh@gmail.com',
      password: '123123'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123123'
      })

    expect(response.status).toBe(200)
  })
})
