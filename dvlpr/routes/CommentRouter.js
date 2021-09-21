const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComment)
Router.get('/:commentId', controller.GetCommentById)

Router.post('/', controller.CreateComment)
Router.delete('/:commentId', controller.DeleteComment)
Router.put('/:commentId', controller.UpdateCommentById)

module.exports = Router
