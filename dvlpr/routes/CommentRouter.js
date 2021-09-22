const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.GetComments)
Router.get(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCommentById
)

Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
Router.delete(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)
Router.put(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCommentById
)

module.exports = Router
