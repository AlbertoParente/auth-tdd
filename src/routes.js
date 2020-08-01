const routes = require('express').Router()
const SessionControler = require('./app/controllers/SessionController')

routes.post('/sessions', SessionControler.store)


module.exports = routes
