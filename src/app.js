const express = require('express')

class AppController {
    constuctor() {
        this.express = express()

        this.middleware()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express
