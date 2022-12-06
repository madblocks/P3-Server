const Router = require('express').Router()
const controller = require('../controllers/CommentLikesController')

Router.get('/', controller.GetCommentLikes)

Router.get('/count', controller.GetAmmountOfLikes)

Router.post('/', controller.CreateCommentLikes)
Router.delete('/:commentlikesid', controller.DeleteCommentLikes)



module.exports = Router