const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComment)
Router.get('/:commentId', controller.GetCommentById)

Router.post('/', controller.CreateComment)
Router.post('/:commentId', controller.DeleteComment)
Router.post('/:commentId', controller.UpdateCommentById)

module.exports = Router
