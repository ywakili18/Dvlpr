const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComment)
Router.get('/:comment_id', controller.GetCommentById)

module.exports = Router
