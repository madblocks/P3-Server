const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const EventRouter = require('./EventRouter')
const CommentRouter = require('./CommentRouter')
const AuthRouter = require('./AuthRouter')
const CommentLikesRouter =('./CommentLikesController')


Router.use('/user', UserRouter)
Router.use('/event', EventRouter)
Router.use('/comment', CommentRouter)
Router.use('/auth', AuthRouter)

module.exports = Router