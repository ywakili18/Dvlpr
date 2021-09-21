const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetPosts)
Router.get('/:postId', controller.GetPostsandComments)
Router.get('/:postId', controller.GetPostById)

Router.put('/:postId', controller.UpdatePostById)

Router.post('/createPost', controller.CreatePost)
Router.delete('/:postId', controller.DeletePost)

module.exports = Router
