const { User } = require('../../src/app/models')

describe('Autetication', () => {
    it('should sum two numbers', async () => {
      const user = await User.create({
        name: 'Alberto',
        email: 'albertoparentefh@gmail.com',
        password_hash: '123456789'
      })

      console.log(user)

      expect(user.email).tobe('albertoparentefh@gmail.com')
    })
})
