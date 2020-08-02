const { User } = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Alberto',
      email: 'albertoparentefh@gmail.com',
      passoword: '123456'
    })

    const compareHash = await bcrypt.compare('123456', user.passoword_hash)

    expect(compareHash).toBe(true)
  })
})
