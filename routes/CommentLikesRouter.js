const Router = require('express').Router()
const controller = require('../controllers/CommentLikesController')

Router.get('/', controller.GetCommentLikes)

Router.post('/:commentlikesid', controller.CreateCommentLikes)
Router.post('/:commentlikesid', controller.DeleteCommentLikes)



module.exports = Router