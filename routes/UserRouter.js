const Router = require('express').Router()
const controller = require('../controllers/UserController')

// url: /api/user/:username
Router.get('/:username', controller.FindUser)
Router.post('/:username', controller.CreateUser)
Router.put('/:username', controller.UpdateUser)
Router.delete('/:username', controller.DeleteUser)



module.exports = Router