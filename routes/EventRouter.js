const Router = require('express').Router()
const controller = require('../controllers/EventController')
const auth = require('../middleware/auth')

// url: /api/event/?query=value
Router.get('/', controller.FindEvents)

// url: /api/event/:eventId
Router.get('/:eventId', controller.GetEventById)
Router.post('/', auth.stripToken, auth.verifyToken, controller.CreateEvent)
Router.put('/:eventId', auth.stripToken, auth.verifyToken, controller.UpdateEvent)
Router.delete('/:eventId', auth.stripToken, auth.verifyToken, controller.DeleteEvent)




module.exports = Router
