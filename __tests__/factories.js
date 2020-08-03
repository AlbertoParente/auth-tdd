const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
  name: 'Alberto',
  email: 'albertoparentefh@gmail.com',
  password: '123123'
})

module.exports = factory
