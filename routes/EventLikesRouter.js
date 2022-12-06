const Router = require('express').Router()
const controller = require('../controllers/EventLikesController')

Router.get('/', controller.GetEventLikes)

Router.get('/count', controller.GetAmountOfLikes)

Router.post('/', controller.CreateEventLikes)
Router.delete('/:eventlikesid', controller.DeleteEventLikes)

module.exports = Router