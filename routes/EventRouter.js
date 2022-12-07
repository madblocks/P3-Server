const Router = require('express').Router()
const controller = require('../controllers/EventController')

// url: /api/event/?query=value
Router.get('/', controller.FindEvents)

// url: /api/event/:eventId
Router.get('/:eventId', controller.GetEventById)
Router.post('/:eventId', controller.CreateEvent)
Router.put('/:eventId', controller.UpdateEvent)
Router.delete('/:eventdId', controller.DeleteEvent)



module.exports = Router