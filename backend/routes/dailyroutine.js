const express = require('express')
const route = express.Router()
const {getroutines , getroutine , postroutines , deleteroutine , updateroutine } = require('../controller/routinecontrollers')

const requireAuth = require('../middleware/auth')

route.use(requireAuth)

route.get('/' , getroutines)

route.get('/:id' , getroutine)

route.post('/' , postroutines)

route.delete('/:id' , deleteroutine)

route.patch('/' ,  updateroutine)


module.exports = route ;