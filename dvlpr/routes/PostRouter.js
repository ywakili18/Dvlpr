const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPosts
)
Router.get(
  '/:postId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPostById
)

Router.put(
  '/:postId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePostById
)

Router.post(
  '/createPost',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
Router.delete(
  '/:postId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = Router
// test
