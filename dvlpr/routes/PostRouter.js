const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetPosts)
Router.get('/:post_id', controller.GetPostDetails)
// Router.post('/create_post',)

module.exports = Router
