const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const auth = require('../middleware/auth')


// url: /api/comment?params=query
Router.get('/', controller.FindComments)

// url: /api/comment/:commentId
Router.get('/:eventId', controller.GetCommentByEvent) 
Router.post('/', auth.stripToken, auth.verifyToken, controller.CreateComment)
Router.put('/:commentId', auth.stripToken, auth.verifyToken, controller.UpdateComment)
Router.delete('/:commentId', auth.stripToken, auth.verifyToken, controller.DeleteComment)

module.exports = Router