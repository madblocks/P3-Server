const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const EventRouter = require('./EventRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/user', UserRouter)
Router.use('/event', EventRouter)
Router.use('/comment', CommentRouter)

module.exports = Router