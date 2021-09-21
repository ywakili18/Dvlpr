const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetPosts)
Router.get('/:postId', controller.GetPostsandComments)

module.exports = Router
