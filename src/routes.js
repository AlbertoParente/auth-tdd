const routes = require('express').Router()
const SessionControler = require('./app/controllers/SessionController')

routes.post('/sessions', SessionControler.store)

routes.get('/dashboard', (req, res) => {
  return res.status(200).send()
})

module.exports = routes
