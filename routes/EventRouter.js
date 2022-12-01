const Router = require('express').Router()
const controller = require('../controllers/EventController')

// url: /api/event
Router.get('/', controller.FindEvents)

// url: /api/event/:eventId
Router.get('/:eventId', controller.GetEvent)
Router.post('/:eventId', controller.CreateEvent)
Router.put('/:eventId', controller.UpdateEvent)
Router.delete('/:evendId', controller.DeleteEvent)


module.exports = Router