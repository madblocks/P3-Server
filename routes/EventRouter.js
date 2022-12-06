const Router = require('express').Router()
const controller = require('../controllers/EventController')

// url: /api/event/?parameter=query
Router.get('/', controller.FindEventsByDateAsc)

//url: /api/:name
Router.get('/:name', controller.GetEventByActivity)

// url: /api/event/:eventId
Router.get('/:eventId', controller.GetEvent)
Router.post('/:eventId', controller.CreateEvent)
Router.put('/:eventId', controller.UpdateEvent)
Router.delete('/:eventdId', controller.DeleteEvent)


module.exports = Router