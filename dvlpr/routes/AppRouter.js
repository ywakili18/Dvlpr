const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')
const controller = require('../controllers/AuthController')

Router.post('/auth/login', controller.Login)
Router.post('/auth/register', controller.Register)

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
