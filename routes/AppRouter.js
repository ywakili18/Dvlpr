const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
